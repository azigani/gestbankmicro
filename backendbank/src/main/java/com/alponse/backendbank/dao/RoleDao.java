package com.alponse.backendbank.dao;

import com.alponse.backendbank.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleDao extends JpaRepository<Role,Long> {

    Optional<Role> findByCode(@Param("code") String code);
}
