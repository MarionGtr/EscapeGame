
import React from "react";
import MyCarousel from "../Components/Carousel";
import EscapeCard from "../Components/EscapeCard";


const HomePage = () => {

// --------------FONCTION POUR LE TITRE FLOU-----------

    (function () {
        var addEvent = function (object, type, callback) {
            if (object == null || typeof object == "undefined") return;
            if (object.addEventListener) {
                object.addEventListener(type, callback, false);
            } else if (object.attachEvent) {
                object.attachEvent("on" + type, callback);
            } else {
                object["on" + type] = callback;
            }
        };

        function getOuterWidth(element) {
            if (!element) return 0; // Vérifie si l'élément existe
            const style = getComputedStyle(element);
            return (
                element.offsetWidth +
                parseFloat(style.marginLeft) +
                parseFloat(style.marginRight)
            );
        }

        function setStyle(element, styles) {
            if (!element) return; // Vérifie si l'élément existe
            for (const property in styles) {
                element.style[property] = styles[property];
            }
        }

        function detectMouseMove() {
            const container = document.querySelector(".container");
            if (!container) return; // Vérifie si l'élément existe
            const containerWidth = getOuterWidth(container);
            const hover = document.querySelector(".hover");
            const leftSide = document.querySelector(".left-side");
            const rightSide = document.querySelector(".right-side");

            document.addEventListener("mousemove", function (e) {
                setStyle(hover, { left: e.pageX + "px" });
                setStyle(leftSide, { left: e.pageX + 75 + "px" });
                const rightSideLeft = containerWidth - e.pageX;
                setStyle(rightSide, { right: rightSideLeft + "px" });
            });
        }

        function detectTouch() {
            const container = document.querySelector(".container");
            if (!container) return; // Vérifie si l'élément existe
            const containerWidth = getOuterWidth(container);
            const hover = document.querySelector(".hover");
            const leftSide = document.querySelector(".left-side");
            const rightSide = document.querySelector(".right-side");

            document.addEventListener("touchmove", function (e) {
                const touch = e.touches[0];
                setStyle(hover, { left: touch.pageX + "px" });
                setStyle(leftSide, { left: touch.pageX + 75 + "px" });
                const rightSideLeft = containerWidth - touch.pageX;
                setStyle(rightSide, { right: rightSideLeft + "px" });
            });
        }

        function detectInput(inputType) {
            const container = document.querySelector(".container");
            if (!container) return; // Vérifie si l'élément existe
            const hover = document.querySelector(".hover");
            const leftSide = document.querySelector(".left-side");
            const rightSide = document.querySelector(".right-side");

            addEvent(window, "resize", function () {
                const containerWidth = getOuterWidth(container);

                document.addEventListener(inputType, function (e) {
                    const pageX = inputType === "touchmove" ? e.touches[0].pageX : e.pageX;
                    setStyle(hover, { left: pageX + "px" });
                    setStyle(leftSide, { left: pageX + 75 + "px" });
                    const rightSideLeft = containerWidth - pageX;
                    setStyle(rightSide, { right: rightSideLeft + "px" });
                });
            });
        }

        detectMouseMove();
        detectTouch();
        detectInput("mousemove");
        detectInput("touchmove");
    })();

//-------------------------------------


    return <>
        <div className="body-homepage">

            <div className="div-main-title">

                <div id="focus-container" className="container-titre">
                    <div className="left-side"></div>
                    <div className="right-side"></div>
                    <div className="hover">
                        <div className="tri-1">
                            <div className="bit-top"></div>
                            <div className="bit-top-left"></div>
                        </div>
                        <div className="tri-2">
                            <div className="bit-top-right"></div>
                            <div className="bit-top-right-2"></div>
                        </div>

                        <div className="tri-3">
                            <div className="bit-bottom-left"></div>
                            <div className="bit-bottom-left-2"></div>
                        </div>

                        <div className="tri-4">
                            <div className="bit-bottom-right"></div>
                            <div className="bit-bottom-right-2"></div>
                        </div>

                    </div>
                    <p className="blur">ENIGMES EVADEES</p>
                    <p className="focus">ENIGMES EVADEES</p>
                </div>

            </div>
            <div className="bloc-carousel">
                <div className="div-carousel">
                    <MyCarousel></MyCarousel>

                </div>
            </div>

            <div ClassName="div-card">
                <EscapeCard></EscapeCard>
            </div>
        </div>


    </>

}

export default HomePage;