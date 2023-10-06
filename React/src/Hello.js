import React from "react";

const Hello = () => {
    // with JSX
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Anand</h1>
    //     </div>
    // )

    // WIHTOUT JSX
  return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Anand')
  )  
}

export default Hello;