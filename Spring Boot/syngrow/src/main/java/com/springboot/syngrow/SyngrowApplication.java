package com.springboot.syngrow;

import com.springboot.syngrow.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SyngrowApplication  {

	public static void main(String[] args) {
		SpringApplication.run(SyngrowApplication.class, args);
	}

}
