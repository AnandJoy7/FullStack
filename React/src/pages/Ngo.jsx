import React from 'react'
import './Ngo.css'
import Navbar from '../layout/Navbar'

export default function Ngo() {
    return (
        <div id="wrapper">
            <div className="overlay" />
            {/* Sidebar */}
            <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                <ul className="nav sidebar-nav">
                    <div className="sidebar-header">
                        <div className="sidebar-brand">
                            <a href="#">Brand</a></div></div>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#team">Team</a></li>
                    <li className="dropdown">
                        <a href="#works" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret" /></a>
                        <ul className="dropdown-menu animated fadeInLeft" role="menu">
                            <div className="dropdown-header">Dropdown heading</div>
                            <li><a href="#pictures">Pictures</a></li>
                            <li><a href="#videos">Videeos</a></li>
                            <li><a href="#books">Books</a></li>
                            <li><a href="#art">Art</a></li>
                            <li><a href="#awards">Awards</a></li>
                        </ul>
                    </li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#followme">Follow me</a></li>
                </ul>
            </nav>
            {/* /#sidebar-wrapper */}
            {/* Page Content */}
            <div id="page-content-wrapper">
                <button type="button" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                    <span className="hamb-top" />
                    <span className="hamb-middle" />
                    <span className="hamb-bottom" />
                </button>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h1>Fancy Toggle Sidebar Navigation</h1>
                            <p>Ngo 1</p>
                            <p>Ngo 2</p>
                            <p>Ngo 3</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* /#page-content-wrapper */}
        </div>
         /* /#wrapper */ 

         

    )
}


