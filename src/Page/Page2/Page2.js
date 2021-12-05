import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.jpg'
import theme from "styled-theming";
import left from './left.png'
import right from './right.png'
import { motion } from 'framer-motion'
import element from './element.png'
import { Button } from '../../components/Navbar/Navbar';
import frame from './Frame.png'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000;
    width: 100%;
  
    padding: 5rem 0;
    
    @media only screen and (max-width: 768px) {
        
        padding:  2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Width = styled.div`
      width: 1600px;
      display: flex;
        
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`

const Left = styled(motion.div)`
        width: 45%;
        height: 32rem;
        background-image: url(${left});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 1rem;
        @media only screen and (max-width: 1700px) {
            height: 35rem;
          }

          @media only screen and (max-width: 1100px) {
            width: 60%;
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
        }

    @media only screen and (max-width: 768px) {
     
        width: 85%;
        height: 20rem;
       
      }
`;

const Right = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        height: 42rem;
        background-image: url(${right});
        background-size: 100% 100%;
        background-repeat: no-repeat;

        padding: 3.5rem 4rem 0 6rem;


        @media only screen and (max-width: 1700px) {
            height: 43rem;
          }

          @media only screen and (max-width: 1500px) {
            height: 45rem;
          
          }
          @media only screen and (max-width: 1400px) {
            padding: 3.5rem 2rem 0 3rem;
          }

          @media only screen and (max-width: 1100px) {
            width: 60%;
            margin-top: 5rem;
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
            height: 38rem;
        }

      @media only screen and (max-width: 768px) {
        width: 95%;
        min-height: 25rem  ; 
        padding: 3.5rem 1rem 0 1.5rem;
      }
`;

export const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: left;
    font-family: 'Nunito Sans', sans-serif;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

export const H = styled.h1`
    color: rgba(255, 91, 41, 1);
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Image = styled.div`
      width: 20rem;
      height: 2rem;
      margin: 0 0 1rem 50%;
  
      @media only screen and (max-width: 1700px) {
        margin: 0 0 1rem 40%;
      }

      @media only screen and (max-width: 1400px) {
        margin: 0 0 1rem 35%;
      }

      @media only screen and (max-width: 1100px) {
        margin: 0 0 1rem 30%;
    }
    @media only screen and (max-width: 998px) {
        margin: 0 0 1rem 50%;
        width: 16rem;
    }
    @media only screen and (max-width: 768px) {
        margin: 0 0 1rem 50%;
        width: 12rem;
    }
    @media only screen and (max-width: 600px) {
        margin: 0 0 1rem 50%;
        width: 8rem;
    }
`
const Input = styled.input`
      width: 55%;
      ::placeholder {
        text-align: center;
      }
`

const Lower = styled.div`
      display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: space-between;
       margin-top: 5rem;
`

const Row = styled.div`
      display: flex;
      justify-content: center;
`
const UpdatedButton = styled(Button)`
      width: 35%;
`
const Image2 = styled.div`
      width: 35rem;
      height: 2rem;
      @media only screen and (max-width: 998px) {
        width: 25rem;
      }
      @media only screen and (max-width: 768px) {
            display: none;
      }
`

const Page2 = () => {
  
    return (
        <Sec id="rarity">

            <Width>
                <Left 
                    whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                   
                />
            
                <Right>
                    <H>7777 unique DADs to be acquired</H>
                    <T>At the end of the 21st century, our planet is on the brink of collapse. States are extinct and the world is controlled by three large corporations: Telum, Machina and Invictus.</T>
                    <T>Shortages of food and resources have unleashed war between cities. Pledging allegiance to the corrupt forces is the only way to obtain the key to survival: the digital avatars of destruction.</T>
                    <T>Get your Digital Avatar of Destruction and defeat your enemies to survive in a world with no place for the weak. Experience the most exciting vehicle combat game on the blockchain and play to earn amazing Crypto rewards.</T>
                    <Image>
                        <img src={element} alt=""  style={{width:"100%",height:"100%"}}/>
                    </Image>
                </Right>

            </Width>

            <Lower>
                <H style={{textAlign:"center"}}>Stay ahead of the game!</H>
                <T style={{textAlign:"center"}}>Subscribe to receive exclusive updates.</T>
                <Row>
                    <Input placeholder="Enter email address"></Input>
                    <UpdatedButton
                        type="button"
                        whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                    whileTap={{ scale: 0.7 }}
                    >SIGN UP</UpdatedButton>
                </Row>
                <Image2>
                    <img src={frame} alt="" style={{width:"100%",height:"100%"}} />
                </Image2>
            </Lower>

        </Sec>
    )
}

export default Page2





