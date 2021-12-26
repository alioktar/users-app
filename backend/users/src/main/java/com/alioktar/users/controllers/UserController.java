package com.alioktar.users.controllers;

import com.alioktar.users.dtos.user.UserAddDto;
import com.alioktar.users.dtos.user.UserDto;
import com.alioktar.users.dtos.user.UserUpdateDto;
import com.alioktar.users.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService _service;

    public UserController(UserService _service) {
        this._service = _service;
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAll(){
        return ResponseEntity.ok(_service.getAll());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getById(@PathVariable String userId){
        return ResponseEntity.ok(_service.getById(userId));
    }

    @PostMapping
    public ResponseEntity add(@RequestBody UserAddDto user){
        return ResponseEntity.ok(_service.insert(user));
    }

    @PutMapping
    public ResponseEntity update(@RequestBody UserUpdateDto user){
        return ResponseEntity.ok(_service.update(user));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity delete(@PathVariable String userId){
        return  ResponseEntity.ok(_service.delete(userId));
    }

}
