package com.strix_invoice.app.api;

import com.strix_invoice.app.Entity.Users;
import com.strix_invoice.app.exceptions.custom.UserAlreadyExistsException;
import com.strix_invoice.app.model.RegisterUserInfo;
import com.strix_invoice.app.model.UsersPrincipal;
import com.strix_invoice.app.records.UserRecord;
import com.strix_invoice.app.service.AuthenticationService;
import com.strix_invoice.app.service.JWTService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("${api.base-path}")
public class AuthenticationControllers {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JWTService jwtService;

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody RegisterUserInfo user) {
        System.out.println(user);
        Users checkUser = authenticationService.findByEmail(user.getEmail());
        if (checkUser == null) {
            try {
                user.setPassword(passwordEncoder.encode(user.getPassword()));
                Users registerUser = authenticationService.register(user);
                return ResponseEntity.status(HttpStatus.CREATED).build();
            } catch (Error e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
            }
        }
        throw new UserAlreadyExistsException("email Already registered");
    }

    @PostMapping("/login")
    public UserRecord login(@RequestBody Users users) {
        String token = authenticationService.authenticateUser(users);
        Users user = authenticationService.findByEmail(users.getEmail());
        return new UserRecord(user.getEmail(), user.getId(), "DVG", token);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody Users users, HttpServletResponse response) {
        // Authenticate user and generate JWT token (details omitted)
        System.out.println(users.getEmail() + " " + users.getPassword());

        try {
            String token = authenticationService.authenticateUser(users);
            Cookie cookie = new Cookie("token", token);
            cookie.setHttpOnly(true); // Makes the cookie HTTP-only
            cookie.setSecure(false); // Ensure it's sent over HTTPS
            cookie.setPath("/");
            cookie.setMaxAge(1 * 60 * 60); // Cookie expires in 1 day
            response.addCookie(cookie);
            return ResponseEntity.ok("Login successful");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
        }
    }

    @PostMapping("/logout-user")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Cookie cookie = new Cookie("token", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false); // Use true if you're on HTTPS
        cookie.setPath("/");
        cookie.setMaxAge(0); // Expire the cookie
        response.addCookie(cookie);
        System.out.println("Logout Invoked" + cookie.getValue());
        return ResponseEntity.ok("Logout successful");
    }

    @PostMapping("/remove-cookie")
    public ResponseEntity<Void> removeCookie(HttpServletResponse response) {
        Cookie cookie = new Cookie("token", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false); // Use true if you're on HTTPS
        cookie.setPath("/");
        cookie.setMaxAge(0); // Expire the cookie
        response.addCookie(cookie);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/me")
    public UserRecord getUser(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        Cookie jwtCookie = null;
        if (cookies != null) {
            jwtCookie = Arrays.stream(cookies)
                    .filter(cookie -> "token".equals(cookie.getName()))
                    .findFirst()
                    .orElse(null);
        }
        String username = null;
        String jwtToken = null;
        if (jwtCookie != null) {
            jwtToken = jwtCookie.getValue();
        }
        if (jwtCookie != null && jwtToken != null) {
            username = jwtService.extractUsername(jwtToken);
        }
        Users user = authenticationService.findByEmail(username);
        return new UserRecord(user.getEmail(), user.getId(), "DVG", "Sample token");
    }

    @GetMapping("/users")
    public List<Users> getAllUsers() {
        return authenticationService.getAllUsers();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users-info")
    public UserRecord getUserInfo(HttpServletRequest request) {
        // Jwt Token is already verified in a filter or interceptor

        // Retrieve the authenticated user's details from Spring Security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName(); // This should give you the username
        // Now fetch the user details from your service layer based on the username
        Users user = authenticationService.findByEmail(username);
        Long userId = -1L;
        if (authentication != null && authentication.getPrincipal() instanceof UsersPrincipal) {
            UsersPrincipal userPrincipal = (UsersPrincipal) authentication.getPrincipal();
            // Access custom field
            userId = userPrincipal.getUserId();
            // Use the custom field as needed
            System.out.println("User's Id: " + userId);
        }
        // Create and return the UserRecord object based on user details
        return new UserRecord(user.getEmail(), userId, "DVG", "Sample token");
    }
}
