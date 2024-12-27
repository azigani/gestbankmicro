package com.alponse.backendbank.dao;

import com.alponse.backendbank.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleDao extends JpaRepository<Role,Long> {
}
