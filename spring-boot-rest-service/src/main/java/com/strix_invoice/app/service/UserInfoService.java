/**
 * The {@code UserInfoService$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.service;

import com.strix_invoice.app.Entity.UsersInfo;
import com.strix_invoice.app.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {

    @Autowired
    UserInfoRepository repository;

    public void createUser(UsersInfo usersInfo){
        repository.save(usersInfo);
    }

}
