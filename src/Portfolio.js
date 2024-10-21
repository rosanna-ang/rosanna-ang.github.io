import logo from './style/logo.png';
import './style/style.css';
import clickImage from "./style/myScript.js";
import paintingdata from "./data/paintingdata.json";


function App() {
  return (
    <div className="App">


        <div>
          {
            paintingdata.map((p, index) => {

              return (<div key={index}>

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
                    <div class={p.frame}>
                    <img src={p.picture}/>
                    </div>
                  </div>
                  <div class="flex-text">
                    <div class="text-painting">
                      <p class="painting-title-font">{p.name}</p>
                      <p>{p.description}</p>
                      <p>Size</p>
                      <p>Medium</p>
                    </div>
                  </div>
                </div>





              </div>)

            })
          }
        </div>

    </div>

  );
}

export default App;
