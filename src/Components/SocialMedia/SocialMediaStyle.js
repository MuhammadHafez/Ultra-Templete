import Styled from 'styled-components';

export const SocialMediaSection = Styled.div`
    height: auto;
    overflow: hidden
`;

export const Social = Styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.title === "Follow Me on" ? '#3b5998':props.title === "Tweet Me on" ? '#498cbf': '#cc2127'};

`;

export const Icon = Styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`;

export const SocialParagraph = Styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`;

export const Span = Styled.span`
    display: block;
    margin-bottom: 8px;
    margin-left: 55px;
`;
