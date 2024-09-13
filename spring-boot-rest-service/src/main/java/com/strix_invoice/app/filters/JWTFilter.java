/**
 * The {@code JWTFilter$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.filters;

import com.strix_invoice.app.service.CustomUserDetailsService;
import com.strix_invoice.app.service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    private JWTService jwtService;

    @Autowired
    private ApplicationContext context;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");
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
        try{
            if (jwtCookie != null && jwtToken != null) {
                username = jwtService.extractUsername(jwtToken);
            }
        }catch (Exception e){
            Cookie cookie = new Cookie("token", null);
            cookie.setHttpOnly(true);
            cookie.setSecure(false); // Use true if you're on HTTPS
            cookie.setPath("/");
            cookie.setMaxAge(0); // Expire the cookie
            response.addCookie(cookie);
            System.out.println("Error Fetching User");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            System.out.println("Inside if Block");
            UserDetails userDetails =
                    context.getBean(CustomUserDetailsService.class).loadUserByUsername(username);

            if (jwtService.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
