import React from "react";

// function Greet(){
//     return <h1> Welcome to <em>Syngrow</em> </h1>
// }

 const Greet = (props) => {
    console.log(props)
    // props.name 
    return (
        <div>
            <h1>Welcome {props.name} as a {props.roleName}</h1>
            {props.children}
        </div>
    )
 }
 export default Greet