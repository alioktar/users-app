package com.alioktar.users.repositories;

import com.alioktar.users.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
