
import React from "react";
import MyCarousel from "../Components/Carousel";


const HomePage = () => {


    return <>
        <div className="body-homepage">

            <div className="div-main-title">
                <h1>ÉNIGME EVADÉE</h1>
            </div>
            <div className="bloc-carousel">
                <div className="div-carousel">
                    <MyCarousel></MyCarousel>

                </div>
            </div>
        </div>


    </>

}

export default HomePage;