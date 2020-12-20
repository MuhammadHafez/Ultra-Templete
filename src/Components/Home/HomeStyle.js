import Styled from 'styled-components';


export const HomeSection = Styled.div`
    height: 500px;
    background: url('../images/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`; 

export const HomeInformation = Styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
`;

export const HomeTitle = Styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
`;

export const HomeInfo = Styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`;

export const HomeDesc = Styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px
`;

export const Span = Styled.span`
    color: #000
`;

export const HomeButton = Styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
        background: #fff;
        color: #eb5424
    }

`;


