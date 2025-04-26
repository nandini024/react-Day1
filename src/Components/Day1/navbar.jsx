import { Component } from "react"
import "./nav.css"
function Navbar()
{
    return(
        <div className="container">
            <h1>Landy</h1>
            <div className="navcontainer"><ul>
                <li>About</li>
                <li>Mission</li>
                <li>Product</li>
                <li className="contact">Contact</li>
            </ul></div>

        </div>


    )
}
export default Navbar


// JSX AND COMPONENTS
const Heading=<h1>headding </h1>

// componenets
// functional Component
// class Component


















// import React, { Component } from 'react';

// class Welcome extends Component {
//   render() {
//     return <h1>Hello, react</h1>;
//   }
// }
