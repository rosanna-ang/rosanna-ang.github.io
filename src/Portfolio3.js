import logo from './style/logo.png';
import './style/style.css';
import clickImage from "./style/myScript.js";
import paintingdata from "./data/paintingdata.json";


function App() {
    const chunkSize = 3;
    const data = []
    for (let i = 0; i < paintingdata.length; i += chunkSize) {
        const chunk = paintingdata.slice(i, i + chunkSize);
        data.push(chunk)
    }

    return (
        <div className="App">


            <div>





                {
                    data.map((chunk, index) => {

                        return (<div key={index}>

                            {/* the painting area */}

                            <div class="gallery">
                                <div class="row">
                                    {chunk.map((p) => {
                                        return (
                                            <div class="column">
                                            <img src={p.picture} alt={p.name} />
                                            <p>{p.name}</p>
                                        </div>
                                        )
                                    })}
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
