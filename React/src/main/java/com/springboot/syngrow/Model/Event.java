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

    @Column(name = "event_name")
    private String eventName;

    @Column(name = "event_description")
    private String eventDescription;

    @Column(name = "event_mode")
    private String eventMode;

    @Column(name = "event_location")
    private String eventLocation;

    @Column(name = "event_eate_time")
    private Date eventDateTime;

    @Column(name = "event_attendess")
    private String eventAttendess;

    @Column(name = "event_reg_fees")
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


