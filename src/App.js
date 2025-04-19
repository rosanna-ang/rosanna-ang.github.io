import logo from './style/logo.png';
import './style/style.css';
import Portfolio from './Portfolio3';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import "./style/AmsterdamHandwriting.ttf";
import { createHashRouter, Link, Route, RouterProvider, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  useEffect(() => {
    document.getElementById("navigation_button").checked = false
  }, [location])

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div class="navbar" id="navigation">
            <div class=" nav-container">
              <input class="checkbox" type="checkbox" name="" id="navigation_button" />
              <div class="hamburger-lines" >
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <div class="logo" >
                <img src={logo} />
              </div>
              <div class="menu-items" >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact-me">Contact</Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </body>
    </div>

  );
}

export default App;
