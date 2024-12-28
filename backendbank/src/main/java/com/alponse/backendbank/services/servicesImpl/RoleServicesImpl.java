package com.alponse.backendbank.services.servicesImpl;

import com.alponse.backendbank.dao.RoleDao;
import com.alponse.backendbank.entities.Role;
import com.alponse.backendbank.services.IRoleService;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class RoleServicesImpl implements IRoleService {

     private RoleDao roleDao;

    @Override
    public Role save(Role role) {
        return roleDao.save(role);
    }

    @Override
    public Optional<Role> findById(Long id) {
        return roleDao.findById(id);
    }

    @Override
    public List<Role> listeRoles() {
        /**
         * Utilisez Streamable lorsque vous souhaitez effectuer
         * des opérations fonctionnelles ou de transformation sur un Iterable
         * (comme ceux retournés par Spring Data) avant de les convertir en une List.
         * Cela peut être utile si vous devez manipuler les données de manière
         * plus flexible ou performante avec les API de flux.
         */
        return Streamable.of(roleDao.findAll()).toList();
    }

    @Override
    public Optional<Role> findByCode(String code) {
        return roleDao.findByCode(code);
    }


}
