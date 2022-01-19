import React, { useState } from 'react';
import styled from 'styled-components';


export const CircleComponent = (p) => {
    const [CircleOpen, SetCircleOpen] = useState(false);

    function fixer() {
        SetCircleOpen(!CircleOpen);
        removeHiddenButtonTrue();
        baBAba();
    }

    function removeHiddenButtonTrue() {
        let hiddenButton = document.getElementById("HiddenButtenTrue");
        hiddenButton.remove();
    }

    function baBAba() {
        let menuChanger = document.getElementById("MenuChanger");
        menuChanger.setAttribute("style", newStyle);
        let logoChanger = document.getElementById("LogoChanger");
        logoChanger.setAttribute("src", newLogo);
    }


    const newStyle = `
        background-color: #101010;
        color: #EEEEEE;
    
        &:hover {
            background-color: #161616;
        }
    `;

    const newLogo = `../sm_logo_purple.png`;
    

    return (
			<Section>
				<HiddenButtonTrue id='HiddenButtenTrue' onClick={() => fixer()}></HiddenButtonTrue>
				<OpenupCircle open={!CircleOpen}></OpenupCircle>{' '}
			</Section>
		);
}
const Section = styled.section `
    z-index: 21;
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

const HiddenButtonTrue = styled.div `
    position: absolute;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 21;
    background-color: transparent;
    border: none;

`;

const HiddenButtonFalse = styled.div `
    cursor: default!important;
    display: none!important;
`;

const CircleLens = styled.div `
    position: absolute;
    width: 700px;
    height: 700px;
    border: 5000px solid #101010;
    border-radius: 50%;
    box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -webkit-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -moz-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    

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

const OpenupCircle = styled.div `
    position: absolute;
    z-index: 17;
    border: 5000px solid #101010;
    border-radius: 50%;
    box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -webkit-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    -moz-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
    height: ${({ open }) => open ? '450px' : '200%'};
    width: ${({ open }) => open ? '450px' : '200%'};

    transition: width .5s ease-in-out,height .5s ease-in-out;
    &:hover {
        height: ${({ open }) => open ? '500px' : '200%'};
        width: ${({ open }) => open ? '500px' : '200%'};
    }

  
`;


const Box = styled.div `
`;