import logo from './style/logo.png';
import './style/style.css';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact-me",
      element: <Contact />
    },
    {
      path: "/portfolio",
      element: <Portfolio />
    }
  ])

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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/contact-me">Contact</a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <RouterProvider router={router} />
      </body>
    </div>

  );
}

export default App;
