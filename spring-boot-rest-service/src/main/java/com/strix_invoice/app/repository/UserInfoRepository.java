package com.strix_invoice.app.repository;

import com.strix_invoice.app.Entity.UsersInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UsersInfo,Long> {
}
