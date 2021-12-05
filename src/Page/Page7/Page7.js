import React from 'react'
import styled from 'styled-components'
import bg from './last.jpg'
import { Button } from '../../components/Navbar/Navbar';

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px) {
        padding: 2rem 0;
        background-size: auto 100%;
      }
`;

const Page2 = () => {
  
    return (
        <Sec id="garage">
          <Button
            type="button"
            whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
            whileTap={{ scale: 0.7 }}
          >Join Our Discord</Button>
        </Sec>
    )
}

export default Page2
