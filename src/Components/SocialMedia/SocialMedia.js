import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SocialMediaSection, Social, Icon, SocialParagraph, Span } from './SocialMediaStyle.js';

const SocialMedia = () => {

    const [socialMediaData, setSocialMediaData] = useState([]);

    useEffect(() => {
        Axios.get('./Json/data.json').then(res => {
            setSocialMediaData(res.data.social);
        });
    }, []);
    console.log(socialMediaData);
    const SocialArray = socialMediaData.map(iter => {
        return (
            <Social title={iter.title} key={iter.id}>
                <Icon className={iter.icon} ></Icon>
                <SocialParagraph>
                    <Span>{iter.title}</Span>
                    <Span>{iter.body}</Span>
                </SocialParagraph>
            </Social>
        )
    })
    return (
        <SocialMediaSection>

            {SocialArray}

        </SocialMediaSection>
    )
}

export default SocialMedia;