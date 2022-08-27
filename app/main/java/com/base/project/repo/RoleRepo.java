package com.base.project.repo;

import com.base.project.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository <entity or class you're going to try to manage
//,type of primary key>
public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByName(String username);
}
