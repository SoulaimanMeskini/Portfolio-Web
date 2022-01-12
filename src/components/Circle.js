import React, { useState } from 'react';
import styled from 'styled-components';

export const CircleComponent = () => {
    const [CircleOpen, SetCircleOpen] = useState(false);
    
     async function toggleClasses(targetButton) {
         targetButton.outerHTML = "";
        document.getElementById("CircleLens").setAttribute("class", "OpenupCircle");
        await new Promise(resolve => setTimeout(resolve, 2000));
        document.getElementById("CircleLens").setAttribute("class", "OpenCircle");
     }

    return (
        <Section>
            <p>{JSON.stringify(CircleOpen)}</p>
            <OpenCircle />
            <HiddenButton onClick={(e) => SetCircleOpen(true)}></HiddenButton> 
            <Box></Box>
            <Box></Box>
            <OpenupCircle open={CircleOpen}></OpenupCircle>
        </Section>   
    )
}

const Section = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    &.box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    }

    &.box:nth-child(1) {
        filter: blur(10px);
    }

    &.box:nth-child(2) {
        clip-path: circle(150px at center);
    }

`;

const HiddenButton = styled.div`
    position: absolute;
    width: 510px;
    height: 510px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 21;
    background-color: transparent;
    border: none;
`;

const CircleLens = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border: 5000px solid #101010;
    border-radius: 50%;
    box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -webkit-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -moz-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    animation: pulse 2s infinite;

    @keyframes pulse {
        0% {
            width: 500px;
            height: 500px;
        }
        50% {
            width: 510px;
            height: 510px;
        }
        100% {
            width: 500px;
            height: 500px;
        }
    }

    @keyframes open-up {
        0% {
            width: 500px;
            height: 500px;
        }
        100% {
            width: 150vw;
            height: 150vh;
        }
    }
`;

const OpenupCircle = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border: 5000px solid #101010;
    border-radius: 50%;
    box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -webkit-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -moz-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    ${({ open }) => open ? 'animation: open-up 2s;' : ''}

    @keyframes open-up {
    0% {
        width: 500px;
        height: 500px;
    }
    100% {
        width: 150vw;
        height: 150vh;
    }}
   
`;

const OpenCircle = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`;

const Box = styled.div`
`;