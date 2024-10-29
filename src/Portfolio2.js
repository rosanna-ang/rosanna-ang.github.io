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


                            {/* the painting area */}
                            <div class= "wrapper">
                                <div id="one" class="flex-painting">
                                    <div class={p.frame}>
                                        <img src={p.picture} />
                                    </div>
                                </div>
                                <div id="two" class="flex-text">
                                    <div class="text-painting">
                                        <p class="painting-title-font">{p.name}</p>
                                        <p>{p.description}</p>
                                        <p>{p.medium} {p.size}</p>
                                        <p>{p.status}</p>
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
