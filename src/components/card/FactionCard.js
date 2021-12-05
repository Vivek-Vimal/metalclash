import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../Page/Page2/Page2'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const FactionCard = (props) => {
    const Box= styled(Tilt)`
        height: 32rem; 
        width: 25rem;   
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 14px;
        margin: 2rem 0 0 0;
        @media only screen and (max-width: 768px) {
            width: 25rem;
            height: 27rem;
           
        }
        @media only screen and (max-width: 500px) {
            width: 95%;
            height: 27rem;
            
        }
    `;
    const Upper = styled.div`
        height: 12rem;
        width: 60%;
        `;

    const Lower = styled.div`
        height: 18rem;
        width: 95%;
        
    `;

    return (
        <Box>
            <Upper>
                <img src={`${props.img ? props.img : ""}`} alt="" style={{width:"100%",height:"100%"}} />
            </Upper>
            <Lower>
                <H style={{textAlign:"center",margin:"2rem 0 1rem 0"}}>{`${props.name ? props.name : "VIVEK"}`}</H>
                <T style={{textAlign:"center"}}>{`${props.desc ? props.desc : "Hello From Developer and Tester"}`}</T>
            </Lower>
        </Box>
    )
}

export default FactionCard
