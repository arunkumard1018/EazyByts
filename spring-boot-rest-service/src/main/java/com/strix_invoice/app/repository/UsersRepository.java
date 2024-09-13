package com.strix_invoice.app.repository;

import com.strix_invoice.app.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    Users findByEmail(String username);
}
