
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
                            <p>
                                I find inspiration in everyday life. My paintings are usually a reflection certain events or feelings from moments in time.  
                                <br/><br/>
                                If you would like to know more and see the artworks in person, please reach out to schedule a visit in my home gallery. 
                                <br/><br/>
                                For commission work, I prefer to visit my client's home to see the theme and colour schemes, so that we both get a feel for how the work will relate to its surroundings.  
                                <br/><br/>
                                - Rosanna Ang
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default About;
