import logo from './style/logo.png';
import './style/style.css';
import Portfolio from './Portfolio2';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import { createHashRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div class="navbar">
            <div class=" nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
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
