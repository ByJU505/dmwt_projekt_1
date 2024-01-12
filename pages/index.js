import React from 'react';
import Navigation from "./navigation";
import Hero from "./hero";
import Infografik from "./infografik";
import Information1 from "./Information1";
import Hero2 from "./hero2";
import Information2 from "./Information2";
import Quiz from "./Quiz";
import Hero3 from "./Hero3";
import Komments from "./Komments";
import Footer from "./footer";
import Buttons from "./Buttons"


export default function home() {
    return (
        <div>
            <Navigation/>
            <Hero/>
            <Infografik/>
            <Information1/>
            <Hero2/>
            <Information2/>
            <Quiz/>
            <Hero3/>
            {/*<Komments/>*/}
            <Buttons/>
            <Footer/>
        </div>
    )
}
