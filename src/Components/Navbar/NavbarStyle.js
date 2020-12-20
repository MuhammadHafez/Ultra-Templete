import Styled from 'styled-components';


export const NavbarSection = Styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`;

export const Logo =Styled.div`
    width: 50%;
    float: left;
`;

export const LogoText = Styled.h2`
    font-size: 30px;
    font-weight: bold
`;

export const UlList  = Styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0px;
`;

export const ListItem  = Styled.li`
    display: inline-block;
`;

export const Anchor = Styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 0px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424
    }
`;
