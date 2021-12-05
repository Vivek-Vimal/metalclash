import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import frame from './Frame.png'
import { motion } from 'framer-motion';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const Card = (props) => {
    const Box= styled(Tilt)`
        height: 20rem; 
        width: 20rem;   
        background-image: url(${frame});
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0 0 0;
       cursor: grab;
       @media only screen and (max-width: 500px) {
            height: 300px; 
            width: 300px;  
      }
    `;
    const Upper = styled(motion.div)`
        height: 18rem;
        width: 18rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1.6rem 1.6rem 0;
        @media only screen and (max-width: 500px) {
            height: 284px; 
            width: 284x; 
            margin: 0 0.4rem 0.4rem 0;  
      }
        `;

    return (
        <Box>

            <Upper
                whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
            >
            
                <img src={`${props.img ? props.img : ""}`} alt="" style={{width:"80%",height:"80%"}} />
           
            </Upper>

        </Box>
    )
}

export default Card
