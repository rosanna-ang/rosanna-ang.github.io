
import './style/style.css';
import home1 from './style/home1.jpg';
import la from './style/la.jpg';

import { createHashRouter, Link, Route, RouterProvider, Routes, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio2';



function Home() {
    return (
        <div className="App">
            <div class="home-container">




                <div class="box stack-button">
                    <p class="home-title-font">My name is Rosanna. Thank you for visting my portfolio. </p>
                    <Link class="home-link" to="/portfolio">
                        <button class="home-btn">Explore More</button>
                    </Link>




                    

                    






                </div>

                <div class="box">
                    <img src={home1} class="home-img mask1" />

                </div>

            </div>

        </div>



    );
}

export default Home;
