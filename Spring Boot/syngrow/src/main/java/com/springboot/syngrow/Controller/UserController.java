package com.springboot.syngrow.Controller;

import com.springboot.syngrow.Model.User;
import com.springboot.syngrow.Repository.UserRepository;
import com.springboot.syngrow.Service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.events.Event;
import java.util.List;

@RestController()
@CrossOrigin("http://localhost:3001")
@RequestMapping("/api/")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    private UserRepository UserRepository;

    @GetMapping("/getAllUser")
    public List<User> getAllEvent() {
        return UserRepository.findAll();
    }

    @PostMapping("/addUser")
    public User createUser(@RequestBody User user) {
        return UserRepository.save(user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable String id){
        UserRepository.deleteById(id);
        return id + " User Deleted!";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return userService.existsByEmailandPassword(user);
    }

}


