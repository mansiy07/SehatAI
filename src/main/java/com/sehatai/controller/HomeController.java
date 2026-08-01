package com.sehatai.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to SehatAI";
    }

    @GetMapping("/about")
    public String about() {
        return "SehatAI - Smart Rural Health Assistant";
    }
}