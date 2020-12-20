import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProfileSkills, Profilee, ProfileList, ProfileItem, Span, SpanWeb, Skills, SkillsDesc, Bar, BarTitle, Perc, Parent, ParentSpan, Title, TitleSpan } from './ProfileStyle.js';

const Profile = () => {

    const [Skillls, setSkills] = useState([]);

    useEffect(() => {
        Axios.get('./Json/data.json').then(response => {
            setSkills(response.data.profile);
        })
    }, [])

    const UserSkills = Skillls.map((iter, index) => {
        return (
            <Bar key={iter.id} index={index}>
                <BarTitle>{iter.name}</BarTitle>
                <Perc>{iter.grade}</Perc>
                <Parent>
                    <ParentSpan></ParentSpan>
                </Parent>
            </Bar>
        );
    })
    return (
        <ProfileSkills>
            <div class="container">
                <Profilee>
                    <Title><TitleSpan>My </TitleSpan>Profile</Title>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Muhammad Hafez
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            22/11/1997
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Alex
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            HH@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profilee>
                <Skills>
                    <Title>Some <TitleSpan>skills</TitleSpan></Title>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                   {UserSkills}


                </Skills>
            </div>
        </ProfileSkills>
    )
}

export default Profile;