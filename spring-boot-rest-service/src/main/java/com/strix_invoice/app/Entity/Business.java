/**
 * The {@code Business$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String GSTIN;
    private Integer HSN;
    private Integer stateCode;

    // Many Businesses can have one UsersInfo
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "users_info_id")
    private UsersInfo usersInfo;

    // One Business can have one Address
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

}
