package com.sehatai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sehatai.dto.RegisterRequest;
import com.sehatai.entity.User;
import com.sehatai.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {

        return userService.registerUser(request);

    }

}