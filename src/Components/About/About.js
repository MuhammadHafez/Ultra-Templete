import React from 'react';
import './About.css';
import { Creative } from './AboutStyle';

const About = () => {
    return (
        <Creative>
            <div class="container">
                <div class="creative-info">
                    <h2 class="info-title"><span>This is</span> Me</h2>
                    <h4 class="info-dir">Creative Director</h4>
                    <p class="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="/">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                    <p class="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat.
                    </p>
                </div>
            </div>
        </Creative>
    )
}

export default About;