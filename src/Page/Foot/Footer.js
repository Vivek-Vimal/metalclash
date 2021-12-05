import React from 'react'
import styled from 'styled-components'
import './Footer.css'
import bg from './foot.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { Image } from '../../components/Navbar/Navbar'
import { T } from '../Page2/Page2'
import dis from '../../components/Navbar/Discord.png'
import twi from '../../components/Navbar/Twitter.png'
import med from '../../components/Navbar/Medium.png'
import logo from '../../components/Navbar/logo.png'

const StyledFooter = styled.div`
  
`
const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 15rem;
    @media only screen and (max-width: 998px) {
        width: 12rem;
    }
    @media only screen and (max-width: 768px) {
        width: 9rem;
    }
`
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-direction: column;
    margin-left: 3rem;
    @media only screen and (max-width: 768px) {
        margin-left: 0;
    }
`

const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin-right: 3rem;
    @media only screen and (max-width: 768px) {
        margin: 2rem 0 0 0;
    }
`
const Link1 = styled(Link)`
    margin-right: 8rem  !important;
    width: 18rem;
   cursor: pointer;
    @media only screen and (max-width: 998px) {
        margin-right: 6rem  !important;
        width: 16rem;
    }
    @media only screen and (max-width: 768px) {
        margin-right: 3rem  !important;
        width: 10rem;
    }
    `

const Footer = () => {
    return (
        <StyledFooter className="foot">

            <Left>
                <IconContainer>
                    <Image
                        src={dis}
                        whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                        whileTap={{ scale: 0.7 }}
                        alt="Logo"  
                    />
                    <Image src={twi} alt="Logo" 
                        whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                        whileTap={{ scale: 0.7 }}
                    />
                    <Image src={med} alt="Logo" 
                        whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                        whileTap={{ scale: 0.7 }}
                    />
                </IconContainer> 
                <T style={{marginTop:"1rem"}}>© 2021 Digital Avatar of Destruction</T>
            </Left>

            <Link1 style={{margin:"0"}} to="home" spy={true} smooth={true} ><img src={logo} alt="Logo" style={{width:"100%",height:"100%"}} /></Link1>

            <Right>
                <T style={{textAlign:"center"}}>Privacy Policy</T>
                <T style={{textAlign:"center"}}>Terms & Conditions</T>
            </Right>
           
        </StyledFooter>
    )
}

export default Footer
