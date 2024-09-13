package com.strix_invoice.app.service;

import com.strix_invoice.app.Entity.Users;
import com.strix_invoice.app.model.UsersPrincipal;
import com.strix_invoice.app.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = usersRepository.findByEmail(username);
        if(users==null){
            throw new UsernameNotFoundException("User Not Found");
        }
        return new UsersPrincipal(users);
    }
}
