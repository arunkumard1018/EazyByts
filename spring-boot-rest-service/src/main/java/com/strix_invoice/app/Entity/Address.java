/**
 * The {@code Address$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;
    private String city;
    private String state;
    private Integer zip;

    @OneToOne(mappedBy = "address")
    private Business business;
}
