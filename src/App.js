import styled from 'styled-components';
import { useEffect, useState } from 'react';
import media from './assets/gif/test.gif';

export const App = () => {
  const [FullScreen, SetFullScreen] = useState(0);

  useEffect(() => {
    },[]);
return <AppBody>
    <ImgCircle src={media} onClick={() => SetFullScreen(!FullScreen)} s={FullScreen} />
  </AppBody>
}



const ImgCircle = styled.img`
  height: ${({ s }) => s ? 100: 50}vh;
  width: ${({ s }) => s ? 100: 50}vh;
  border-radius: 10000px;
  object-fit: cover;
  

  transition: height .1s ease-in-out, width .1s ease-in-out;
`;


const Overlay = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: black;
`;
const AppBody = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: black;
`;

const FullView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: transparent;
`;

const Btn = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #B6B6B6;
  border: none;
  
  &:hover {
    opacity: 0.6;    
  }
`;

const Circle = styled.div`
  height: 20vh;
  width: 20vh;
  border-radius: 500px;
  cursor: pointer;
  img {
    height: 100%;
     width: 100%;
      border-radius: 500px;
  }
`;