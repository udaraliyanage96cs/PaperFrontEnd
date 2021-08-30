// import React, { Component } from 'react';
// export default class Navbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }


//     render() {
//         return (
// <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="/home">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="/about">About</a>
//                 </li>


//             </ul>
//         </div>
//     </div>
// </nav>
//         );
//     }
// }


import React, { useState, useEffect } from "react"
const Navbar = () => {
    const [navcolor, setNavcolor] = useState();

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavcolor('linear-gradient(to right, #274685 0%, #3db3c5 100%)');
        } else {
            setNavcolor('transparent');
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })




    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background:navcolor}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar