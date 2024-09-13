package com.strix_invoice.app.service;

import com.strix_invoice.app.Entity.Users;
import com.strix_invoice.app.model.RegisterUserInfo;
import com.strix_invoice.app.records.UserRole;
import com.strix_invoice.app.repository.UsersRepository;
import com.strix_invoice.app.utility.SetUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Service
public class AuthenticationService {
    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private JWTService jwtService;
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Transactional
    public Users register(RegisterUserInfo regUser) {
        Users user = new Users();
        user.setEmail(regUser.getEmail());
        user.setPassword(regUser.getPassword());
        user.setRoles(new HashSet<>(Arrays.asList(UserRole.USER)));
        user.setIsVerified(true);
        user.setUsersInfo(SetUserInfo.mapToUserInfo(regUser));
        return usersRepository.save(user);
    }

    public String authenticateUser(Users users) {
        Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(users.getEmail(), users.getPassword()));
        if (authenticate.isAuthenticated()) {
            return jwtService.generateToken(users.getEmail());
        } else {
            return "Authentication FAILED";
        }
    }

    public Users findByEmail(String email) {
        Users user = usersRepository.findByEmail(email);
        return user;
    }

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }
}
