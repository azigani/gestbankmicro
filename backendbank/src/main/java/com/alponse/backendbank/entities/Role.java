package com.alponse.backendbank.entities;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // ID auto-incrémenté
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "uuid", updatable = false, nullable = false, unique = true)
    private UUID uuid;


    @Column(name = "code", unique = true)
    private String code;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    // Constructeur par défaut
    public Role() {
        this.uuid = UUID.randomUUID();  // Générer un UUID unique
    }

    // Constructeur avec paramètres
    public Role(String name, String description) {
        this.name = name;
        this.description = description;
        this.uuid = UUID.randomUUID();  // Générer un UUID unique
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }


}
