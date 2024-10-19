import logo from './style/logo.png';
import paintingview from './style/paintingview.jpg';
import './style/style.css';


function App() {
    return (
        <div className="App">
            <div>
                <div class="flex-container">
                    <div class="flex-painting">
                        <div class="no-frame">
                            <img src={paintingview} />
                        </div>
                    </div>
                    <div class="flex-text">
                        <div class="text-painting">
                            <p class="painting-title-font">Contact Me</p>
                    <p>For enquiries, drop an email to rosanna.c.ang@gmail.com.</p>
                    <p>To view the artwork in person, please reach out for further details.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default App;
