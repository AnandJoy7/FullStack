package com.springboot.syngrow.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "ngo")
public class Ngo {
    @Id
    @Column(name = "NGO_id")
    private String NGOId;

    @Column(name = "NGO_name")
    private String ngoName;

    @Column(name = "NGO_mail_id")
    private String ngoMailId;

    @Column(name = "NGO_password")
    private String ngoPassword;

    @Column(name = "NGO_focus_area")
    private String ngoFocusArea;

    @Column(name = "NGO_website")
    private String ngoWebsite;

    @Column(name = "NGO_address")
    private String ngoAddress;

    @Column(name = "NGO_phone_no")
    private Long ngoPhoneNo;

    @Column(name = "NGO_founded_year")
    private Date ngoFoundedYear;

    @Column(name = "NGO_legal_status")
    private String ngoLegalStatus;

    @Column(name = "NGO_subscription")
    private String ngoSubscription;



//    NGO_name
//    NGO_mail_id
//    NGO_password
//    NGO_focus_area
//    NGO_website
//    NGO_address
//    NGO_phone_no
//    NGO_founded_year
//    NGO_legal_status
//    NGO_subscription




}
