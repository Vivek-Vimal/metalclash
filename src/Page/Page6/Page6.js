import React from 'react'
import styled from 'styled-components'
import theme from "styled-theming";
import bbg from './bbg.png'
import nbg from './nbg.png'
import { H,T } from '../Page2/Page2'
import { CardData } from '../config/config'
import TeamCard from '../../components/card/TeamCard'

const backgroundImagePage6 = theme("theme", {
    light: bbg,
    dark: nbg,
  });

export const bColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  



const Sec = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 1); 
    padding: 5rem 0.5rem ;
    @media only screen and (max-width: 768px) {
        min-height: 60rem;
        width: 100%;
        padding: 5rem 0.5rem ;
    }

`

const GridAuto = styled.div`
    display: grid;
    width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  place-items: center;

@media only screen and (max-width: 1300px) {
  width: 90%;
}
@media only screen and (max-width: 768px) {
  width: 95%;
}
@media only screen and (max-width: 330px) {
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
 
}
`


const Page6 = () => {
    return (
        <Sec id="roadmap">
            <H>Who are we?</H>
            <T>The team behind it all</T>

            <GridAuto>

              {CardData?.map(e => (
                          
                <TeamCard img={e.img}/>
                          
              ))}
            
            </GridAuto>

        </Sec>
    )
}

export default Page6
