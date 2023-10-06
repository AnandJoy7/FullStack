
import './AddEvent.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import './AddEvent.css'
import React from 'react';

const AddEvent = () => {

    const [event_name, setEvent_name] = useState('')

    const [event_attendess, setEvent_attendees] = useState('')

    const [event_mode, setEvent_mode] = useState('')

    const [event_date_time, setEvent_date_time] = useState('')

    const [event_location, setEvent_location] = useState('')

    const [event_description, setEvent_description] = useState('')

    const [event_reg_fees, setEvent_reg_fees] = useState('')

    // const [event_image, setEvent_image] = useState('')


    const handlesubmit = () => {

        axios.post("http://localhost:8080/addEvent", JSON.stringify({

            event_name: event_name,

            event_attendess: event_attendess,

            event_date_time: event_date_time,

            event_description: event_description,

            event_location: event_location,

            event_mode: event_mode,

            event_reg_fees: event_reg_fees,

        }), { headers: { "Content-Type": "application/json" } })

            .then((Response) => {

                console.log(Response.data)

                alert('Event Added Successfully')

            })

            .catch((err) => {

                console.log(err)

                console.log(err.Response)

            })

    }

    return (

        <div>

            <h1>Event Form</h1>

            <form>

                <div class="name  ">

                    <label><b>Event_name</b></label><br />

                    <input type="text" placeholder="Enter Event_name" name="uname" onChange={(e) => setEvent_name(e.target.value)} required /><br /><br />

                </div>


                <div class="name  ">

                    <label><b>Event_description</b></label><br />

                    <input type="text" placeholder="Enter Event_descripiton" name="uname" onChange={(e) => setEvent_description(e.target.value)} required /><br /><br />

                </div>

                <div class="name1  ">

                    <label><b>Event_location</b></label><br />

                    <input type="text" placeholder="Enter Event_Location" name="uname" onChange={(e) => setEvent_location(e.target.value)} required /><br /><br />

                </div>


                <div class="name1  ">

                    <label><b>Event_attendess</b></label><br />

                    <input type="text" placeholder="Enter Event_attendees" name="uname" onChange={(e) => setEvent_attendees(e.target.value)} required /><br /><br />

                </div>

                <div class="name1  ">

                    <label><b>event_date_time</b></label><br />

                    <input type="date" placeholder="Enter Event_date_time" name="uname" onChange={(e) => setEvent_date_time(e.target.value)} required /><br /><br />

                </div>

                <div class="name1  ">

                    <label><b>Event_mode</b></label><br />

                    <select placeholder='Select Event mode' onChange={(e) => setEvent_mode(e.target.value)} id="Roles" required>

                        <option value="" disabled selected hidden>Select </option>

                        <option value1="1">Online</option>

                        <option value1="1">Offline</option>

                    </select>

                </div>

                <div class="name">

                    <label><b>Event_reg_fees </b></label><br />

                    <input type="number" placeholder="Enter Event_reg-fees " name="uname" onChange={(e) => setEvent_reg_fees(e.target.value)} required /><br /><br />

                </div>

                <div class="btn btn-primary">

                    <button onClick={handlesubmit} className="btn" type="submit">

                        Register</button>

                </div>

            </form>

        </div>

    );

};


export default AddEvent;
