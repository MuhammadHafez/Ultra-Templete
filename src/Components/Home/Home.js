import React from 'react';
import { HomeSection , HomeInformation ,HomeTitle,HomeInfo,HomeDesc,Span,HomeButton } from "./HomeStyle";

const Home = () => {
    return (
        <HomeSection>
            <div className='container'>
                <HomeInformation>
                    <HomeTitle>Muhammad Hafez</HomeTitle>
                    <HomeInfo>Junior Web Developer</HomeInfo>
                    <HomeDesc>
                        I'm a <Span>MERN Stack developer</Span> creating modern and resposive apps to Web. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeButton className='home-btn'>Let's Begin</HomeButton>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;