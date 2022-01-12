import React, { useState } from 'react';
import styled from 'styled-components';

export const HeaderComponent = () => {
	const [MenuOpen, SetMenuOpen] = useState(false);
	

	return (
		<Header>
			<Logo onclick="location.href='#'" />
            <Fill />
            <HeaderBubble open={MenuOpen} onClick={(e) => SetMenuOpen(!MenuOpen)}>
                {MenuOpen === true && <>
                    <p>PROJECTS</p>
                    <p>LOOK BOOK</p>
                    <p>ABOUT</p>
                </>}
            </HeaderBubble>
            <Fill />
			<HiddenItem />
		</Header>
	);
};

const Header = styled.div`
    position: absolute;
    top: 0;
	height: 60px;
	width: 100vw;
	display: flex;
	background-color: transparent;
	z-index: 23;
	margin-bottom: -40px;
    margin-top: 20px;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: space-between;
    align-items: center;
`;

const Fill = styled.div`
    display: flex;
    flex-grow: 1;
`;

const HeaderBubble = styled.div`
    height: 50px;
    border-radius: 50px;
    width: ${({ open }) => open ? 300:50}px;
    padding: ${({ open })=> open ? '0px 20px' : '0px'};
    cursor: ${({ open }) => open ? 'default' : 'cursor'};
    background-color: #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background-color: ${({ open }) => open ? '#EEEEEE' : 'rgb(196, 196, 196)'};
	}

    p {
        cursor: pointer;
        color: black;
        text-decoration: none;
        border-radius: 5px;
        white-space: nowrap;
        animation: menu-fade .8s;
        &:hover {
            color: #6F02C6;
        }

    }
    
    transition: width .2s ease-in-out;

    @keyframes menu-fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
   
`;

const Logo = styled.div`
	background-image: url(../src/assets/pictures/sm_logo_white.png);
	background-position: center;
	background-size: cover;
	transition: 0.6s;
	width: 150px;
	height: 200px;
	margin: 10px;

	&:hover {
		background-position: center;
		background-size: cover;
		position: relative;
		transition: 0.4s;
		width: 150px;
		height: 100%;
		z-index: 23;
		margin: 10px;
	}
`;

const HiddenItem = styled.div`
	width: 150px;
	height: 60px;
	display: block;
	margin: 10px;
`;
