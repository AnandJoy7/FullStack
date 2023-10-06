import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();


  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/login", { 
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message == "Email not exits") {
          alert("Email not exits");
        }
        else if (res.data.message == "Login Success") {

        //   navigate('/home');
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }


    catch (err) {
      alert(err);
    }

  }

  return (
    <div className="container" style={{backgroundColor:"white", marginTop:"150px", width:"1000px"}}>
      <div >
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div className="row" style={{margin:"auto"}}>
          <div className="col-sm-6">

            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Name"

                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}

                />

              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password"

                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}

                />
              </div>
             {/* <Link to={'/'} style={{textDecoration:"none"}}> <button type="submit" className="btn btn-primary">Login</button></Link> */}
             <button type="submit" className="btn btn-primary">Login</button>

            </form>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;