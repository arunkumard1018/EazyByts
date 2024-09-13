package com.strix_invoice.app.api;

import com.strix_invoice.app.Entity.Users;
import com.strix_invoice.app.records.ApiDetails;
import com.strix_invoice.app.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//  --->   /api/v1/app/api-info
@RestController
@RequestMapping("${api.base-path}/app")
public class AppInfo {

    @Value("${api.version}")
    private String version;
    @Value("${app.name}")
    private String app;
    @Value("${api.base-path}")
    private String basePath;
    @Autowired
    private AuthenticationService authenticationService;

    @GetMapping("/hello")
    public String greet() {
        return "Welcome to Strix App";
    }
    @GetMapping("/users/{email}")
    public Users getUser(@PathVariable String email){
        Users user = authenticationService.findByEmail(email);
        return user;
    }

    @GetMapping("/hello/{name}")
    public String hello(@PathVariable String name){
        return "Hello "+name;
    }

    @GetMapping("/api-info")
    public ApiDetails getApiInfo() {
        return new ApiDetails(app,version,basePath);
    }
}