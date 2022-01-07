import React from 'react';
import shadows from "../src/img/web2.png"
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common name="Grow Your Business with" imgsrc={shadows} btnname="Get Started" visit="/service"/>
        </>
    )
}

export default Home;