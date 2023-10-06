import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import 'react-router-dom';
import Event from './pages/Event';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import HomePage from './pages/HomePage';
import StickyBar from './layout/StickyBar';
// import Sidenav from './layout/Sidenav'
import UserData from './pages/UserData';
import AddEvent from './pages/AddEvent';


class App extends Component {
     render() {
          return (

               <div>
                    {/* <UserData/> */}
                    
                  {/* <Sidenav/> */}
                    {/* <Router>
                         <Routes>
                              <Route path='/' element={<Login />}></Route>
                              <Route path='/Signup' element={<Signup />}></Route>
                              <Route path='/Event' element={<Event />}></Route>
                         </Routes>
                    </Router>  */}
                    {/* <StickyBar/>  */}
                    {/* <Event/> */}
                    <AddEvent/>
                    
               </div>
               

          )
     }
}

export default App;


//  <div className="App">
{/* <User/> */ }
{/* <Login/> */ }
{/* <Message></Message> */ }
//   <Message/>
//    <Demo/>
//    < Greet name="Anand" roleName="Web Developer">
//     <p>This is a children props</p>
//    </Greet>
//    < Greet name="Aswin" roleName="Video Editior">
//     <button>Edit
//     </button>
//    </Greet>
//    < Greet name="Ruben" roleName="Java Developer"/>
//    < Welcome name="Anand" roleName="Web Developer"/>
//    < Welcome name="Aswin" roleName="Video Editor"/>
//    < Welcome name="Ruben" roleName="Java Developer"/>
//  </div>