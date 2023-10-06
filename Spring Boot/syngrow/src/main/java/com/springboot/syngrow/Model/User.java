package com.springboot.syngrow.Model;
import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue
    @Column(name = "User_id")
    private String Userid;

    @Column(name = "User_name")
    private String userName;

    @Column(name = "User_mail_id")
    private String userMailID;

    @Column(name = "User_password")
    private String userPassword;

    @Column(name = "User_DOB")
    private Date userDOB;

    @Column(name = "User_gender")
    private String userGender;

    @Column(name = "User_phone_no")
    private Long userPhoneNo;

    @Column(name = "User_address")
    private String userAddress;

    @Column(name = "User_account_created_date")
    private Date userAccountCreatedDate;

}