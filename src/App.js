import styled from 'styled-components';
import { useEffect, useState } from 'react';
import media from './assets/gif/test.gif';

export const App = () => {
  
  function toggleClasses(){
    var img = document.getElementsByTagName("img")[0].classList.add("transitionGif");
  }

  return (
    <>
      <div class="WhiteText">Made by Ming Li Janssen</div>
      <ImgCircle src={media} onClick={toggleClasses}>
      </ImgCircle>
      <div class="Black Top"></div>
      <div class="Black Left"></div>
      <div class="Black Right"></div>
      <div class="Black Bot"></div>
    </>
  )
}

const ImgCircle = styled.img`
  height: 100vh;
  width: 100vW;
  clip-path: circle(20% at 50% 50%);
  transition: clip-path 1s;
  cursor: pointer;
`;