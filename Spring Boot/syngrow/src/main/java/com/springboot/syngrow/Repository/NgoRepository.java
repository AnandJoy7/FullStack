package com.springboot.syngrow.Repository;

import com.springboot.syngrow.Model.Ngo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NgoRepository extends JpaRepository <Ngo,String>{
}
