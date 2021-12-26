package com.alioktar.users.services;

import com.alioktar.users.dtos.user.UserAddDto;
import com.alioktar.users.dtos.user.UserDto;
import com.alioktar.users.dtos.user.UserUpdateDto;
import com.alioktar.users.exception.RequestException;
import com.alioktar.users.models.User;
import com.alioktar.users.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final ModelMapper _mapper;
    private final UserRepository _userRepository;

    public UserService(UserRepository userRepository, ModelMapper mapper) {
        _mapper = mapper;
        _userRepository = userRepository;
    }

    public List<UserDto> getAll() {
        List<User> users = _userRepository.findAll();
        return users.stream().map(user -> _mapper.map(user, UserDto.class)).collect(Collectors.toList());
    }

    public UserDto getById(String id) {
        User user = _userRepository.findById(id).orElseThrow(() -> new RequestException("User not found with id: " + id));
        return _mapper.map(user, UserDto.class);
    }

    public UserDto insert(UserAddDto userDto) {
        User user = _mapper.map(userDto, User.class);
        return _mapper.map(_userRepository.insert(user), UserDto.class);
    }

    public UserDto update(UserUpdateDto userDto) {
        User user = _mapper.map(userDto, User.class);
        return _mapper.map(_userRepository.save(user), UserDto.class);
    }

    public boolean delete(String id) {
        boolean exists = _userRepository.existsById(id);
        if (exists) {
            _userRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
