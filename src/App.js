import logo from './style/logo.png';
import './style/style.css';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import Home from './Home';

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
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <body>

      <Home />
      <About />
      <Contact />
      <Portfolio />
      </body>
    </div>

  );
}

export default App;
