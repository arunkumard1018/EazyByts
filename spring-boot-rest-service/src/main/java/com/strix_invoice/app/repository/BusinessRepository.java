package com.strix_invoice.app.repository;

import com.strix_invoice.app.Entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface BusinessRepository extends JpaRepository<Business,Long> {
}
