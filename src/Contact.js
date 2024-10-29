import logo from './style/logo.png';
import paintingview from './style/paintingview.jpg';
import './style/style.css';


function App() {
    return (
        <div className="App">
            <div>
                <div class="wrapper">
                    <div id="one" class="flex-painting">
                        <div class="no-frame">
                            <img src={paintingview} />
                        </div>
                    </div>
                    <div id="two" class="flex-text">
                        <div class="text-painting">
                            <p class="painting-title-font">Contact Me</p>
                            {/*
                            <p>Artworks are listed for sale in here and here.</p>
                            */}  
                            <p>For enquiries, drop an email to rosanna.c.ang@gmail.com.</p>
                            <p>To view the artworks in person or to discuss comission work, please reach out for further details.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default App;
