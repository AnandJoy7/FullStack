package com.springboot.syngrow.Repository;

import com.springboot.syngrow.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository <User,String> {

    @Query(value = "select count(u.user_mail_id) from User u where u.user_mail_id = ?1", nativeQuery = true)
    public int existsByUserEmail(String user_mail_id);

    @Query(value = "select count(u.user_password) from User u where u.user_mail_id = ?1 and u.user_password = ?2", nativeQuery = true)
    public int existsByUserPassword(String user_mail_id, String user_password);

    @Query(value = "select * from User u where u.user_mail_id = ?1", nativeQuery = true)
    public List<User> findByUserMailId(String user_mail_id);






}