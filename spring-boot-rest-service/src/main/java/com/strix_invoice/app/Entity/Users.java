package com.strix_invoice.app.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.strix_invoice.app.records.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import java.util.Set;

@Entity
@Data
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Column(unique = true)
    private String email;
    @NotNull
    private String password;

    @ElementCollection(targetClass = UserRole.class, fetch = FetchType.EAGER)
    @CollectionTable(name = "users_roles", joinColumns = @JoinColumn(name = "users_id"))
    @Enumerated(EnumType.STRING)
    @JsonIgnore
    private Set<UserRole> roles;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "id")
    @JsonIgnore
    private UsersInfo usersInfo;

    private Boolean isVerified;
    private String verificationToken;
    private String verificationTokenExpiresOn;
    private String forgotPasswordToken;
    private String forgotPasswordTokenExpiresOn;
}
