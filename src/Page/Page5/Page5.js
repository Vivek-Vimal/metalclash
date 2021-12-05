import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.jpg'
import theme from "styled-theming";
import tank from './tank.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiHomeassistant } from 'react-icons/si';
import { IoIosPodium } from 'react-icons/io';
import { SiAzuredataexplorer } from 'react-icons/si';
import { SiZig } from 'react-icons/si'
import { T } from '../Page2/Page2'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem  0;
    background-color:  rgba(51, 51, 51, 1);
    background-repeat: no-repeat;
    background-image: url(${tank});
    background-size: 70% 70%;
    background-position: right bottom !important;
  
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Left = styled.div`
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
     
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
      @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
        height: auto;
        margin-left: 0;
      }
`;



const Page5 = () => {
  
    return (
        <Sec id="learn">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(241, 92, 48, 1)', color: '#FFF' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Phase 01"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SiHomeassistant />}
                >
                    {/* <h3 className="vertical-timeline-element-title">0%</h3> */}
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 01</h4>
                    <T>
                    At D.A.D we fully believe that community trust is key. As such, rewarding our early supporters with quality Non-Fungible Tokens (NFTs) is our first task as a NFT project. While providing an extensive roadmap and a community raffle upon the completion of the early supporter minting phase.
                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(241, 92, 48, 1)', color: '#FFF' }}
                    date="Phase 02"
                    iconStyle={{ background: 'rgba(237, 73, 74, 1)', color: '#fff' }}
                    icon={<IoIosPodium />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 02</h4>
                    <T>
                    High-quality artwork is another important aspect of D.A.D, alongside community trust. After all the NFTs have been minted, D.A.D’s arts and development team will reveal the Genesis D.A.D vehicles. Subsequently, a second community raffle will be held for all holders of Genesis D.A.D vehicles.

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(241, 92, 48, 1)', color: '#FFF' }}
                    date="Phase 03"
                    iconStyle={{ background: 'rgba(237, 73, 74, 1)', color: '#fff' }}
                    icon={<SiAzuredataexplorer />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 03</h4>
                    <T>
                    The first major update for the D.A.D community the development team has been working on for months. All 7777 Genesis D.A.D NFT holders will be granted access to D.A.D’s Garage and all its utilities, which will be revealed in phase 3. One such utility for example is staking of the NFT to earn $PCORE, the currency required to manufacture the next generation of D.A.Ds.

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(241, 92, 48, 1)', color: '#FFF' }}
                    date="Phase 04"
                    iconStyle={{ background: 'rgba(237, 73, 74, 1)', color: '#fff' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 04</h4>
                    <T>
                    Introduction to the manufacturing process of D.A.D vehicles, how to create the next generation of D.A.D vehicles. And the revealing of Arenas, Land Ownership, and Drones. There will also be the first update to the Garage, improving the experience the community has as holders of Genesis D.A.D NFTs, the mini-game, and the competition reveal!

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(241, 92, 48, 1)', color: '#FFF' }}
                    date="Phase 05"
                    iconStyle={{ background: 'rgba(237, 73, 74, 1)', color: '#fff' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 05</h4>
                    <T>
                    D.A.D Online sneak peeks and Alpha access whitelists. While our team holds the Alpha access lottery, we will start the $PCORE staking for governance rights. Revealing more aspects of the game as development progresses to its final stage before D.A.D Online goes public.
                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(241, 92, 48, 1)', color: '#FFF' }}
                    date="Phase 06                   "
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 06</h4>
                    <T>
                    The start of D.A.D Online beta, marketplace, and second-generation Plasma Energy Core minting. In conjunction with the reveal of D.A.D Metaverse, comprehensive Serum usage guide and examples of Avatars that have already used the Serum.

                    </T>
                </VerticalTimelineElement>
              </VerticalTimeline>
        </Sec>
    )
}

export default Page5
