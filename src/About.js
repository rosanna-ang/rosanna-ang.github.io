
import paintingview from './style/portrait1.jpg';
import './style/style.css';


function About() {
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
                            <p class="painting-title-font">About
                            </p>
                            <p>Rosanna is an amateur artist.  Ever since her childhood she has dabbled in painting and music. 
                                Having donned the pratical corprate hat for more than 20 years, she is rekindling her passion for art by sharing her paintings to friends, family, and now to the rest of the world as well.
                    

                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default About;
