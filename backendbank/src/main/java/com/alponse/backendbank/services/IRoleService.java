package com.alponse.backendbank.services;

import com.alponse.backendbank.entities.Role;

import java.util.List;
import java.util.Optional;

public interface IRoleService  {

    Role save(Role role);
    Optional<Role> findById(Long id);
     List<Role> listeRoles();
}
