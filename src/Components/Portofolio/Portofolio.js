import Axios from 'axios';
import React , {useState,useEffect} from 'react';
import { PortofolioSection, PortofolioTitle, Span, PortofolioList, PortofolioItem, ImageWrapper, Image, Overlay, OverlaySpan, } from './PortofolioStyle.js';

const Portofolio = () => {
    const [portofolioTech , setPortofolioTech] = useState([]);
    const [Images , setImages] = useState([]);

    useEffect(()=>{
        Axios.get('./Json/data.JSON').then(response=>{
            setPortofolioTech(response.data.portofolioTechnologies);
            setImages(response.data.portofolio);
        })
    },[])

    const portofolioTechnologies = portofolioTech.map((iter,index)=>{
        return(
            <PortofolioItem index={index} key={iter.id} >{iter.name}</PortofolioItem>
        );
    })

    const portofolioImages = Images.map(iter=>{
        return(
            <ImageWrapper key={iter.id}>
                    <Image src={iter.image} />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                    </OverlaySpan>
                    </Overlay>
            </ImageWrapper>
        );
    })
    return (
        <PortofolioSection>
            <PortofolioTitle><Span>My</Span> Portfolio</PortofolioTitle>
            <PortofolioList>
                {portofolioTechnologies}
            </PortofolioList>
            <div>
                {portofolioImages}
            </div>
        </PortofolioSection>
    )
}

export default Portofolio;