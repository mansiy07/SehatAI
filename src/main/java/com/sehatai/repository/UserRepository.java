package com.sehatai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sehatai.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}