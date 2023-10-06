package com.springboot.syngrow.Repository;

import com.springboot.syngrow.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository <Event,String> {

    @Query(value = "SELECT max(event_id) FROM event",nativeQuery = true)
    String maxvalue();

//    List<Event> getAllEvent();
//    @Query("select coalesce(max(a.Event_id), 0) from Event a")
//    public String findMaxId();


}