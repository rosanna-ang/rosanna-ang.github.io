import logo from './style/logo.png';
import fishinmarket from './paintings/fishinmarket.jpg';
import './style/style.css';
import clickImage from "./style/myScript.js";
import closeImage from "./style/myScript.js";

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
        {/* the modal */}

        <div id="modal01" class="w3-modal" onclick="this.style.display='none'">
          <div class="w3-modal-content w3-animate-zoom">
            <h2 class="modal-header">Modal Header</h2>
            <img id="modalImage" src="" />
          </div>
        </div>
        {/* the painting area */}
        <div class="flex-container">
          <div class="flex-painting">
            <div class="wood frame2">
              <img src={fishinmarket} onClick={() => clickImage(fishinmarket)} />
            </div>
          </div>
          <div class="flex-text">
            <div class="text-painting">
              <p class="painting-title-font">Fish Market</p>
              <p>Whereas recognition. In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document a document or a typeface without relying on meaningful
                content. Whereas recognition. In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface without relying on meaningful.</p>
              <p>Size</p>
              <p>Medium</p>
            </div>
          </div>
        </div>>

      </body>
    </div>

  );
}

export default App;
