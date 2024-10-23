
import paintingview from './style/portrait1.jpg';
import './style/style.css';


function About() {
    return (
        <div className="App">
            <div>
                <div class="wrapper">
                    <div id="one"class="flex-painting">
                        <div class="no-frame">
                            <img src={paintingview} />
                        </div>
                    </div>
                    <div id = "two" class="flex-text">
                        <div class="text-painting">
                            <p class="painting-title-font">My name is Rosanna Ang 
                            </p>
                            <p>Thank you for visiting my portfolio. </p>
                    <p>After having explored European landscapes and the female beauty, he experienced some abstract paintings. He rapidly found the pleasure of unlimited creative power. He has really become aware that he has started a never ending journey through imagination. People are now eager to see his new visions !



Pol Ledent was born in 1952 in Belgium. He came to painting in 1989. He started with watercolor but felt rapidly that oil painting would match his way of being. He is a self-taught painter . Nevertheless he took some drawing lessons in a Belgian academy. After taking part into numerous group exhibitions , some galleries in Belgium proposed to him to exhibit his works. Dinant, Bouillon, Brussels , Paris and Moscow in October 2006. He has already sent many paintings to various countries USA ( New-York Buffalo Broadway ) , Santa Cruz,San Diego, San Jose,Los Angeles, Florida,Miami Baton-Rouge),Seattle, grand blanc (MI), to France, to China, to Scotland, to Portugual, to Switzerland, to Australia and .......... After having explored European landscapes and the female beauty, he experienced some abstract paintings. He rapidly found the pleasure of unlimited creative power. He has really become aware that he has started a never ending journey through imagination. People are now eager to see his new visions</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default About;
