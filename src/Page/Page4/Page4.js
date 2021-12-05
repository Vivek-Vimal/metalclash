import React from 'react'
import styled from 'styled-components'
import img from '../Page1/whaLe.png'
import { motion } from 'framer-motion'
import theme from 'styled-theming';
import { H, T } from '../Page2/Page2'
import { FactionData } from '../config/config'
import FactionCard from '../../components/card/FactionCard'
import bg from './bg4.png'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  


const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    @media only screen and (max-width: 998px) {
        min-height: 100vh;
        width: 100%;
        padding: 2rem 0;
        flex-direction: column;
        background-size: auto 100%;
      }
`;

const StyleCard = styled.div`
      width: 1600px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
      @media only screen and (max-width: 1500px) {
        width: 95%;
        justify-content: space-between;
      }
      @media only screen and (max-width: 998px) {
        width: 95%;
        justify-content: center;
        flex-direction column;
      
      }
`

const Page4 = () => {
  
    return (
        <Sec id="core">
            <H>Factions</H>

            <StyleCard>

                {FactionData?.map(e => (
                        
                    <FactionCard img={e.img} name={e.name} desc={e.desc}/>
                        
                ))}

            </StyleCard>

        </Sec>
    )
}

export default Page4
