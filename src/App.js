import React from 'react';
import { HeaderComponent } from './components/Header';
import { CircleComponent } from './components/Circle';
import { IntroComponent } from './components/Intro';
import { Textanimation } from './components/Textanimation';
import { VideoLoop } from './components/VideoLoop';

export const App = () => {
  return (
    <>
      <VideoLoop />
      <HeaderComponent />
      <CircleComponent />
      <IntroComponent />
    </>
  )
}