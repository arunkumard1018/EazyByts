/**
 * The {@code UsersInfo$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class UsersInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;
    private Long phone;
    private String PAN;
    private String profileImageUri;
    private String city;
    private String state;
    private Integer zip;
    private boolean isAgreedTheTerms;

    // One UsersInfo can have many Businesses
    @OneToMany(mappedBy = "usersInfo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Business> businesses = new HashSet<>();
}
