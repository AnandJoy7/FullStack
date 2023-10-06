import React from "react";
import './Sidenav.css'
// import bg from 'src/layout/bg.jpg'

export default function Sidenav() {
    return (

        <div>
            {/* Coding by CodingLab | www.codinglabweb.com */}
            {/* <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
            {/*--======== CSS ======== */}
            <link rel="stylesheet" href="style.css" />
            {/*--===== Boxicons CSS ===== */}
            <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
            {/*<title>Dashboard Sidebar Menu</title>*/}
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/* <img src={bg} alt="" /> */}
                        </span>
                        <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>
                    <i className="bx bx-chevron-right toggle" />
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <li className="search-box">
                            <i className="bx bx-search icon" />
                            <input type="text" placeholder="Search Ganes..." />
                        </li>
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-home-alt icon" />
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-bar-chart-alt-2 icon" />
                                    <span className="text nav-text">Revenue</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-bell icon" />
                                    <span className="text nav-text">Notifications</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-pie-chart-alt icon" />
                                    <span className="text nav-text">Analytics</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-heart icon" />
                                    <span className="text nav-text">Likes</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-wallet icon" />
                                    <span className="text nav-text">Wallets</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <li className>
                            <a href="#">
                                <i className="bx bx-log-out icon" />
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                        <li className="mode">
                            <div className="sun-moon">
                                <i className="bx bx-moon icon moon" />
                                <i className="bx bx-sun icon sun" />
                            </div>
                            <span className="mode-text text">Dark mode</span>
                            <div className="toggle-switch">
                                <span className="switch" />
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
            <section className="home">
                <div className="text">NGO</div>
            </section>
        </div>
    )
}



