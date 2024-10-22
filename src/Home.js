
import './style/style.css';
import home1 from './style/home1.jpg';
import la from './style/la.jpg';



function Home() {
    return (
        <div className="App">
            <div class="home-container">



                <div class="box stack-title">

                </div>

                <div class="box stack-button">
                    <p class="home-title-font">My name is Rosanna. Thank you for visting my portfolio. </p>
                    <a class="home-link" href="https://www.freecodecamp.org/">
                        <button class="home-btn">Explore More</button>
                    </a>
                </div>

                <div class="box">
                    <img src={home1} class="home-img mask1" />

                </div>

            </div>

        </div>



    );
}

export default Home;
