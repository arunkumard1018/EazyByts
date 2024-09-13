/**
 * The {@code BusinessService$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.service;

import com.strix_invoice.app.Entity.Business;
import com.strix_invoice.app.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class BusinessService {
    @Autowired
    private BusinessRepository businessRepository;

    public List<Business> retrieveAllBusiness(){
        return businessRepository.findAll();
    }
}
