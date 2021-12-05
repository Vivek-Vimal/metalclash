import React,{useState, useEffect, useRef } from 'react'
import './Navbar.css';
import logo from './logo.png';
import mlogo from './logo.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link, animateScroll as scroll } from "react-scroll";
import theme from "styled-theming";
import { useSelector, useDispatch } from "react-redux";
import dis from './Discord.png';
import med from './Medium.png'
import twi from './Twitter.png';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  

export const Link1 = styled(Link)`
  display: flex;
  margin: 0 0 0 15vw;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (max-width: 2800px) {
    margin: 0 0 0 12vw;
  }
  @media only screen and (max-width: 1800px) {
    margin: 0 0 0 12rem;
  }
  @media only screen and (max-width: 1600px) {
    margin: 0 0 0 10rem;
  }

  @media only screen and (max-width: 1400px) {
    margin: 0 0 0 8rem;
  }
  @media only screen and (max-width: 1200px) {
    margin: 0 0 0 10rem;
  }
  @media only screen and (max-width: 1100px) {
    margin: 0 0 0 8rem;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0 0 0 7rem;
  }
  @media only screen and (max-width: 900px) {
    margin: 0 0 0 6rem;
  }
  @media only screen and (max-width: 800px) {
    margin: 0 0 0 4rem;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 0 0 3rem;
  }

  @-webkit-keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
 
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  
  &:hover, &:focus, &:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

`;

const Link2 = styled(Link)`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #FFF !important;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    
  }

`;

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
  }`

const PC = styled.div`
display: block;
@media only screen and (max-width: 1200px) {
  display: none;
}`

export const Button = styled(motion.button)`
  background-color:rgba(241, 92, 48, 1);
  border: none;
  padding: 0 2rem;
  color: #FFF;
  height: 3.5rem;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const IconContainer = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-right: 3rem;
  @media only screen and (max-width: 1600px) {
    width: 25rem;
  }
  @media only screen and (max-width: 1600px) {
    width: 22rem;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`
export const Image = styled(motion.img)`
  cursor: pointer;
`

const Navbar = () => {

  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);


  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })  

    return (
        <nav className={navbar ?  "navActiveLight": "nav"} >

          <PC>
            <Link1 to="home" spy={true} smooth={true} ><img src={logo} alt="Logo" className={navbar ? "LogoActive" : "Logo"} /></Link1>
          </PC>
          <Mobile>
            <Link1 to="home" spy={true} smooth={true} style={{marginRight:"0"}} ><img src={mlogo} alt="mlogo" className="LogoB"/></Link1>
          </Mobile>
          <PC>
            <ul className="list">
                <Link2 to="home" spy={true} smooth={true} offset={-80}>Home</Link2>
                <Link2 to="core" spy={true} smooth={true} offset={-80}>PCore</Link2>
                <Link2 to="garage" spy={true} smooth={true} offset={-80}>Garage</Link2> 
            </ul> 
          </PC>

          <PC>
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
              <Button 
                  type="button"
                  whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                  whileTap={{ scale: 0.7 }}
              >Connect Wallet</Button>
            </IconContainer> 
          </PC>
        
          <Mobile ref={node}>
            <FocusLock disabled={!open}>
              <Burger  open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </Mobile>

        </nav>   
    )
}

export default Navbar
