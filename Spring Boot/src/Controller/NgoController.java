package com.springboot.syngrow.Controller;

import com.springboot.syngrow.Model.Ngo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NgoController {
    @Autowired
    private com.springboot.syngrow.Repository.NgoRepository NgoRepository;

    @GetMapping("/getAllNgo")
    public List<Ngo> getAllNgo() {
        return NgoRepository.findAll();
    }


    @PostMapping("/addNgo")
    public Ngo createNgo(@RequestBody Ngo ngo) { return NgoRepository.save(ngo);}


}
