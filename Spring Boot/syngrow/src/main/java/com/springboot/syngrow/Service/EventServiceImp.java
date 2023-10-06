//package com.springboot.syngrow.Service;
//
//import com.springboot.syngrow.Model.Event;
//import com.springboot.syngrow.Repository.EventRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//
//@Service
//public class EventServiceImp {
//
//    @Autowired
//    private EventRepository eventRepository;
//
//    public List<Event> getAllEvent() {
//        return (List<Event>) eventRepository.findAll();
//    }
//
//
////    public Event createEvent(Event event){
////        Event.setEvent_Id(eventRepository.findMaxId() + 1);
////        return eventRepository.save(event);}
//
//}
//
//
