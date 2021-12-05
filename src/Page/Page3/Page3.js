import React from 'react'
import {data} from '../config/config'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import theme from "styled-theming";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`
    min-height: 30rem;
    width: 100%;
    padding: 2rem 0;
    background-color:  rgba(51, 51, 51, 1);
    @media only screen and (max-width: 768px) {
        min-height: auto;
        width: 100%;
        padding: 2rem 0;
    }
`;

const H = styled.h1`
color: ${backgroundColor};
font-size: 2.5rem;
font-weight: bold;
margin: 1rem 0 0 3rem;
@media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const resposive =  {
    600: {
        items: 1,
    },
    
    1000:{
        items: 2,
    },
    1200:{
        items: 3,
    },
    1600:{
        items: 4,
    },
    2400:{
        items: 6,
    }
  }


const Page3 = () => {

    return (
        <Sec>

            <AliceCarousel
                autoPlay={true}
                infinite={true}
                animationDuration={1468}
                disableButtonsControls={true}
                disableDotsControls={true}
                autoPlayStrategy={'none'}
                autoHeight={true}
                paddingLeft={60}
                responsive={resposive}
              
            >


                    {data?.map(e => (
                        
                        <Card img={e.img} name={e.name.toUpperCase()} desc={e.desc} bg={e.bg}/>
                        
                    ))}


            </AliceCarousel>
        </Sec>
    )
}

export default Page3
