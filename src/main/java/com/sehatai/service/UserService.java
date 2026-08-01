package com.sehatai.service;

import com.sehatai.dto.RegisterRequest;
import com.sehatai.entity.User;

public interface UserService {

    User registerUser(RegisterRequest request);

}