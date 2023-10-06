import React from 'react'
import './HomePage.css'
import logo2 from '../layout/logo2.png'
export default function HomePage() {
  return (
    <div>
      <body>
        <header class="header">
          <nav class="navbar">
            <h2 class="logo" ><a href="#">Syngrow</a></h2>
            <input type="checkbox" id="menu-toggle" />
            <label for="menu-toggle" id="hamburger-btn">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </label>
            <ul class="links">
              <li><a href="#">Home</a></li>
              <li><a href="#">User</a></li>
              <li><a href="#">NGO</a></li>
              <li><a href="#">Event</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
            <div class="buttons">
              <a href="#" class="signin">Sign In</a>
              <a href="#" class="signup">Sign Up</a>
            </div>
          </nav>
        </header>
        <section class="hero-section">
          <div class="hero">
            <h2>Sync </h2>
            <h2>Grow </h2>
            <h1 class="tag">Together...</h1>
            <br/>
              <h5>To Raise Funds for the NGO and create the platform where user can able to identify them as a social responsible citizen.</h5>
            
            <div class="buttons">
              <a href="#" class="donate">Donate</a>
              <a href="#" class="learn">Learn More</a>
            </div>
          </div>
          <div class="img">
            <img src={logo2} alt="hero image" />
            {/* <h2 class="title">Syngrow</h2> */}
          </div>
        </section>
      </body>
    </div>
  )
}
