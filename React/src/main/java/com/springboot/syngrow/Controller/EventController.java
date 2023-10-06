package com.springboot.syngrow.Controller;

import com.springboot.syngrow.Generator.IdGenerator;
import com.springboot.syngrow.Model.Event;
import com.springboot.syngrow.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3001")
public class EventController {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private IdGenerator idGenerator;

    @GetMapping("/getAllEvent")
    public List<Event> getAllEvent() {
        return eventRepository.findAll();
    }

    @PostMapping("/addEvent")
    public Event createEvent(@RequestBody Event event) {
        String prefix="EVT";
        String id=eventRepository.maxvalue();
        event.setEventId(idGenerator.generate(prefix,id));


        return eventRepository.save(event);}


}


