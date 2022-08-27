package com.base.project.api;

import com.base.project.domain.User;
import com.base.project.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor //inject field in constructor
public class UserController {
    private final UserService userService;

//to determine if it is a post o get request
    @GetMapping("/users")
    public ResponseEntity<List<User>>getUsers(){
        //call service --> return ok and in the body the users
        return ResponseEntity.ok().body(userService.getUsers());
    }
}
