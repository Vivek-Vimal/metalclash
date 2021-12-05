import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import './Bg.css'
 import bg from './bg1.jpg'
 import videobg from './mainbg.mp4'
import blue from './whaLe.png'
import yellow from './yellow.png'
import { motion } from 'framer-motion'
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../redux/actions";
import theme from "styled-theming";
import { BsBoxArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import twi from './twitter.png'
import dis from './discord.png'

const buttonColor = theme("theme", {
    light: "linear-gradient(to right, #000000, #434343)",
    dark: "linear-gradient(to right, #ff4e50, #f9d423)",
  });

const bColor = theme("theme", {
    light: "#E5E5E5",
    dark: "#000000",
  });  

const iconColor = theme("theme", {
    light: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    dark: "linear-gradient(to right, #fc00ff, #00dbde)",
  });  

  const heroImg = theme("theme", {
    light: blue,
    dark: blue,
  });  

const HomePage = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
height: 100vh;
width: 100%;
// background-image: url(${bg});
// background-size: 100% 100%;
// background-repeat: no-repeat;
 background-color: #000;

@media only screen and (max-width: 768px) {
    min-height: 50rem;
    width: 100%;
    padding: 0rem 0.5rem 2rem 0.5rem;
    background-size: auto 100%;
    flex-direction: column;
}`;

const HeroImg = styled(motion.div)`
    width: 38rem;
    height: 30rem;
    background-size: 100% 100%;
background-repeat: no-repeat;
background-image: url(${heroImg});
    @media only screen and (max-width: 1400px) {
        width: 30rem;
        height: 22rem;
      }
    @media only screen and (max-width: 768px) {
        width: 15rem;
        height: 12rem;
      }
`;

const T = styled.p`
    color: ;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const Mobile = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display:block;
        width: 100%;
        height: auto;
      }
`;

const Center = styled.div`
        width: auto;
        height: auto;
        display: grid;
        place-items: center;
`;

const  Button = styled.button`
     background: ${buttonColor} ;
     color: ${bColor};
     border: none;
     font-size: 5rem;
     font-weight: bold;
     cursor: pointer;
     padding: 0.3rem 3rem;
     border-radius: 3rem;
     margin-top: 2rem;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    
    &:hover, &:focus,&:active {
        -webkit-transform: scale(1.1) rotate(4deg);
        transform: scale(1.1) rotate(4deg);
      }
      @media only screen and (max-width: 1400px) {
        font-size: 4rem;
        padding: 0.3rem 2rem;
      }

     @media only screen and (max-width: 768px) {
        font-size: 2rem;
        padding: 0.3rem 1rem;
      }
`;

const ModeButton = styled(DarkModeToggle)`
      position: fixed;
      bottom: 10%;
      left: 5rem;
      @media only screen and (max-width: 768px) {
        top : 5rem;
        left: 2rem;
      }
`
const ShowButton = styled(Link)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: rgba(241, 92, 48, 1); // ${iconColor};
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 3rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 3rem ;
    bottom: 10rem;
    display: grid;
    place-items: center;
    @media only screen and (max-width: 768px) {
      right: 2rem ;
    bottom: 5rem;
    }
    
`

const IconContainer = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
`

const Icon = styled(motion.div)`
  width: 4.5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;
  @media only screen and (max-width: 768px) {
    width: 3rem;
  height: 3rem;
  }
`

const Home = () => {

    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();
    
    const [ showButton, setShowButton ] = useState(false)

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  


    return (
        <HomePage id="home">

          <video autoPlay loop muted className="video">
            <source src={videobg} type="video/mp4"/>
          </video>

            {/* <Center>
               <HeroImg
                initial={{ x: 0, y:0}}
                animate={{ x: 0, y: -25 }}
                transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",}}
               >
                   <img src= {heroImg} alt="" style={{width:"100%",height:"100%"}} />
               </HeroImg>
               <Button 
                type="button"
               >
                   CONNECT
               </Button>
               <IconContainer>
                 <Icon
                  whileHover={{ scale: 1.1,boxShadow:"0 0 25px #000"}}
                  whileTap={{ scale: 0.7 }}
                 >
                   <img src={twi} alt="" style={{width:"100%",height:"100%"}} />
                 </Icon>
                 <Icon style={{marginLeft:"1rem"}}
                  whileHover={{ scale: 1.1,boxShadow:"0 0 25px 	#000"}}
                  whileTap={{ scale: 0.7 }}
                 >
                  <img src={dis} alt="" style={{width:"100%",height:"100%"}} />
                 </Icon>
               </IconContainer>
            </Center> */}

            {/* <ModeButton
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
                checked={darkThemeEnabled}
                size={80}
            /> */}

          { showButton ? 
          
            <ShowButton
              type="button"
              to="home" spy={true} smooth={true}
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          }
            
            
        </HomePage>
    )
}

export default Home
