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

                            <div class="gallery">
                                <div class="row">
                                    <div class="column">
                                        <img src={p.picture} alt="Snow" />
                                        <p>{p.name}</p>
                                    </div>
                                    <div class="column">
                                        <img src={p.picture} alt="Forest" />

                                        <p>{p.name}</p>
                                    </div>
                                    <div class="column">
                                        <img src={p.picture} alt="Mountains" />

                                        <p>{p.name}</p>
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
