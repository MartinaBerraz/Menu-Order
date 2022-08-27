package com.base.project.service;

import com.base.project.domain.Role;
import com.base.project.domain.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User>getUsers(); //usually return a page of only 10 users
}
