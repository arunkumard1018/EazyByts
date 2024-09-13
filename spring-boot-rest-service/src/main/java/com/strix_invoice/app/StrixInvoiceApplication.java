package com.strix_invoice.app;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class StrixInvoiceApplication {
    @Value("${cors.url}")
    private String corsUri;

    public static void main(String[] args) {
        SpringApplication.run(StrixInvoiceApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(corsUri) //http://192.168.1.3:5173 Allow only your frontend domain
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowCredentials(true) // Allow cookies to be included
                        .allowedHeaders("*") // Allow any headers
                        .exposedHeaders("Authorization") // Expose any needed headers
                        .maxAge(3600); // Cache preflight requests for an hour
            }
        };
    }

}
