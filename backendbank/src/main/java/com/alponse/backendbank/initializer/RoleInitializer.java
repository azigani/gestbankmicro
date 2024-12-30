package com.alponse.backendbank.initializer;

import com.alponse.backendbank.entities.Role;
import com.alponse.backendbank.services.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RoleInitializer implements CommandLineRunner {

    @Autowired
    IRoleService iRoleService;

    @Override
    public void run(String... args) throws Exception {
        if (!iRoleService.findByCode("ADMIN").isPresent()) {
            Role role1 = new Role();
            role1.setCode("ADMIN");
            role1.setName("Administrateur");
            role1.setDescription("Administrateur Gestion de banque");
            iRoleService.save(role1);
            System.out.println("Role ADMIN ajouté");
        } else {
            System.out.println("Role ADMIN déjà présent");
        }

        iRoleService.listeRoles().forEach(
                role -> System.out.println(role.getId() + " " + role.getCode() + " " + role.getName())
        );
    }

}
