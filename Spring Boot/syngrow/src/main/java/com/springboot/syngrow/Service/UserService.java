package com.springboot.syngrow.Service;

import com.springboot.syngrow.Model.User;
import com.springboot.syngrow.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public String existsByEmailandPassword(User user){
        if(userRepository.existsByUserEmail(user.getUserMailID())>0 ){
            if(userRepository.existsByUserPassword(user.getUserMailID(), user.getUserPassword()) > 0){

                List<User> user1 =  userRepository.findByUserMailId(user.getUserMailID());

                System.out.println(user1.toString());

                String[] strArray = user1.toString().split(",");
                return "{ \"1\" : \"Logged in successfully\"}";
            }
            return "{ \"2\" : \"incorrect password\"}";
        }
        return "{ \"3\" : \"Email Id does not exist ;(\"}" ;
    }
}
