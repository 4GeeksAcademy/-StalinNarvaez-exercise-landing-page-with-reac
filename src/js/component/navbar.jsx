import React from "react";
const Navbar = ()=>{
    return(
        <nav className="navbar bg-body-tertiary bg-black text-white">
            <div className="container-fluid text-white">
                <a className="navbar-brand text-white" href="#">
                    Start Bootstrap
                </a>
                <ul className="nav justify-content-end text-white">
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar