package com.springboot.syngrow.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Base64;
import java.util.Date;

@Data
@Entity
@Table(name = "event")
public class Event {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Event_id")
    private String eventId;

    @Column(name = "Event_name")
    private String eventName;

    @Column(name = "Event_Description")
    private String eventDescription;

    @Column(name = "Event_mode")
    private String eventMode;

    @Column(name = "Event_Location")
    private String eventLocation;

    @Column(name = "Event_Date_time")
    private Date eventDateTime;

    @Column(name = "Event_Attendess")
    private String eventAttendess;

    @Column(name = "Event_reg_fees")
    private String eventRegFees;


//    @Column(name = "NGO_id")
//    private String ngoId;
//
//    @Column(name = "User_id")
//    private String userId;

}

//Event_id,
//        Event_name,
//        Event_Description,
//        Event_mode,
//        Event_Location,
//        Event_Date_time,
//        Event_Attendess,
//        Event_reg_fees,
//        NGO_id,
//        User_id


