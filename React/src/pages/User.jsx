import React, { useEffect, useState } from "react";
import axios from "axios";

function User() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadusers();

    }, []);

    const loadusers = async () => {
        const result = await axios.get("http://localhost:8080/api/addUser")
        setUsers(result.data);
    }

    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mail</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map((user, index) => (

                        <tr>
                            <th scope="row" key={index}>{index+1}1</th>
                            <td>{user.user_id}</td>
                            <td>{user.user_name}</td>
                            <td>{user.user_mail_id}</td>
                            <td>{user.user_password}</td>
                            <td>{user.user_dob}</td>
                            <td>{user.user_gender}</td>
                            <td>{user.user_phone_no}</td>
                            <td>{user.User_address}</td>
                            <td>{user.user_account_created_date}</td>

                        </tr>

                    ))
                }

            </tbody>
        </table>
    </div>
}

export default User