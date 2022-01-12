import React from 'react';
import { HeaderComponent } from './components/Header';
import { CircleComponent } from './components/Circle';
import { IntroComponent } from './components/Intro';
import { Textanimation } from './components/Textanimation';

export const App = () => {
  return (
    <>
      <IntroComponent/>
      <HeaderComponent/>
      <CircleComponent/>
      <Textanimation/><div class="animatie">
            <p class="text-uppercase"><span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
        </div>
    </>
  )
}