import React, { useEffect, useState } from 'react'
import './Event.css'
import event2 from '../img/event2.png'
import event3 from '../img/event3.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Event() {
    const [data, setData]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/getAllEvent")
        .then(res => setData(res.data))
        .catch(err =>console.log(err));
    },[])
    console.log(data)

  return (
    
    <div className='body'>
    <section class="destination" id="destination">
        <div class="heading">
            <span>Event Panel</span>
            <h1>keep looking up</h1>
        </div>
        <div class="box-container">
            <div class="box" data-aos="fade-up" data-aos-delay="150">
                <div class="image">
                    <img src={event3} alt="" />
                </div>
                <div class="content">
                    <p>DESCRIPTION:{data.event_description}</p>
                    <a href="">Name:{data.event_name} <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="300">
                <div class="image">
                    <img src="images/des-2.jpg" alt="" />
                </div>
                <div class="content">
                    <p>Promote eco awareness</p>
                    <a href="">Green Cleanup<i class="fas fa-angle-right"></i></a>
                </div>
            </div>        
            <div class="box" data-aos="fade-up" data-aos-delay="450">
                <div class="image">
                    <img src={event2} alt="" />
                </div>
                <div class="content">
                    <p>Explore tech trends</p>
                    <a href="">Tech Conference <i class="fas fa-angle-right"></i></a>
                </div>
            </div>     
            <div class="box" data-aos="fade-up" data-aos-delay="600">
                <div class="image">
                    <img src="images/des-4.jpg" alt="" />
                </div>
                <div class="content">
                    <p>Learn healthy habits</p>
                    <a href="">Health Workshop <i class="fas fa-angle-right"></i></a>
                </div>
            </div>    
            <div class="box" ata-aos="fade-up" data-aos-delay="750">
                <div class="image">
                    <img src="" alt="" />
                </div>
                <div class="content">
                    <p>Friendly sports fun</p>
                    <a href="">Sports Tournament <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="900">
                <div class="image">
                    <img src="" alt="" />
                </div>
                <div class="content">
                    <p>Savor global flavors</p>
                    <a href="">Food Festival <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
                <div class="box" data-aos="fade-up" data-aos-delay="1050">
                <div class="image">
                    <img src="images/des-7.jpg" alt="" />
                </div>
                <div class="content">
                    <p>Enjoy live music</p>
                    <a href="">Music Concert <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="1200">
                <div class="image">
                    <img src="images/des-8.jpg" alt="" />
                </div>
                <div class="content">
                    <p>Annual Alumini Connect</p>
                    <a href="">MAA <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="1200">
                <div class="image">
                    <img src="images/des-8.jpg" alt="" />
                </div>
                <div class="content">
                    <p>Celebrate community</p>
                    <a href="">Community Picnic <i class="fas fa-angle-right"></i></a>
                </div>
            </div>                                                                                                                        
        </div>
    </section>
    </div>
  )
}
