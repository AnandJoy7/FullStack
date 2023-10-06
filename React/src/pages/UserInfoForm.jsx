// UserInfoForm.js

import React, { Component } from 'react';


class UserInfoForm extends Component {

    constructor(props) {

        super(props);

        this.state = {

            email: '',

            name: '',

            phoneNo: '',

            dob: '',

            gender: 'male', // Default gender

            address: '',

            password: '',


        };

    }

    handleInputChange = (e) => {

        const { name, value } = e.target;

        this.setState({ [name]: value });

    };


    handleSubmit = (e) => {

        e.preventDefault();

        // You can handle form submission here, e.g., send data to the server or perform validation.

        console.log(this.state);

    };


    render() {

        return (

            <form onSubmit={this.handleSubmit}>

                <div className="form-group">

                    <label htmlFor="email">Email:</label>

                    <input

                        type="email"

                        id="email"

                        name="email"

                        value={this.state.email}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>


                <div className="form-group">

                    <label htmlFor="name">Name:</label>

                    <input

                        type="text"

                        name="name"

                        value={this.state.name}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>
                <div className="form-group">

                    <label htmlFor="phoneno">PhoneNo:</label>

                    <input

                        type="text"

                        name="phoneNo"

                        value={this.state.phoneNumber}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>                

                <div className="form-group">

                    <label htmlFor="dob">Date of Birth:</label>

                    <input

                        type="date"

                        id="dob"

                        name="dob"

                        value={this.state.dob}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>

                <div className="form-group">

                    <label htmlFor="gender">Gender:</label>

                    <select

                        id="gender"

                        name="gender"

                        value={this.state.gender}

                        onChange={this.handleInputChange}

                    >

                        <option value="male">Male</option>

                        <option value="female">Female</option>

                        <option value="other">Other</option>

                    </select>

                </div>

                <div className="form-group">

                    <label htmlFor="address">Address:</label>

                    <input

                        type="text"

                        name="address"

                        value={this.state.address}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>

                <div className="form-group">

                    <label htmlFor="password">Password:</label>

                    <input

                        type="password"

                        id="password"

                        name="password"

                        value={this.state.password}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>




            <button type="submit">Submit</button>

            </form>

        );

    }

}



export default UserInfoForm;