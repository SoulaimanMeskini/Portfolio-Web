import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';


import startLoop from '../assets/vids/Start_Loop.mp4'
import midLoop from '../assets/vids/Mid_Loop.mp4'
import breakLoop from '../assets/vids/Break_Loop.mp4'
import endLoop from '../assets/vids/End_Loop.mp4'

import { Textanimation } from '../components/Textanimation';



export const VideoLoop = () => {
    const [VideoState, SetVideoState] = useState(1);
    const [VideoLoaded, SetVideoLoaded] = useState(false);
    const [ClickedContinue, SetClickedContinue] = useState(false);
    const [A, SetA] = useState('');

    const refVideo1 = useRef(null);
    const refVideo2 = useRef(null);
    const refVideo3 = useRef(null);
    const refVideo4 = useRef(null);
    const [Video1Loaded, SetVideo1Loaded] = useState(false);
    const [Video2Loaded, SetVideo2Loaded] = useState(false);
    const [Video3Loaded, SetVideo3Loaded] = useState(false);
    const [Video4Loaded, SetVideo4Loaded] = useState(false);


    useEffect(()=> {
        if (ClickedContinue) {
            setTimeout(() => {
                SetClickedContinue(false)
            }, 4000);
        }
    },[ClickedContinue])



    useEffect(() => {
        // play the video when loaded
        if (Video1Loaded === true && Video2Loaded === true && Video3Loaded === true && Video4Loaded === true) {
            refVideo1.current.play();
        }

    }, [Video1Loaded, Video2Loaded, Video3Loaded, Video4Loaded])
    

    return (
        <VideoHolder>
            {ClickedContinue && <Textanimation />}
            {VideoState === 1 && <video style={{zIndex: 15}} muted preload="true"  ref={refVideo1}  onEnded={() => {
                SetVideoState(VideoState + 1)
                refVideo2.current.time = 0.2;
                refVideo2.current.play();
            }} onCanPlayThrough={() => SetVideo1Loaded(true)}>
                <source  src={startLoop+ '#t=0.2'} type="video/mp4" />
            </video>}

            {VideoState < 3 && <video onClick={() => {
                
                SetClickedContinue(true)
            }} style={{zIndex: 14}} muted preload="true" onEnded={()=> {
                if (ClickedContinue) {
                    refVideo3.current.play();
                    SetVideoState(VideoState + 1)
                } else {
                    refVideo2.current.time = 0.2;
                    refVideo2.current.play();
                }
                
            }} ref={refVideo2}  onCanPlayThrough={() => SetVideo2Loaded(true)}> 
                <source src={midLoop+ '#t=0.2'} type="video/mp4" />
            </video>}

            {VideoState < 4 &&  <video style={{zIndex: 13 }} muted preload="true" ref={refVideo3} onEnded={() => {
                SetVideoState(VideoState + 1);
                refVideo4.current.time = 0.2
                refVideo4.current.play();
            }} onCanPlayThrough={() => SetVideo3Loaded(true)}>
                <source  src={breakLoop + '#t=0.2'} type="video/mp4" />
            </video>}
            {VideoState < 5 && <video style={{ zIndex: 12 }} muted preload="true" ref={refVideo4} onCanPlayThrough={() => SetVideo4Loaded(true)}>
                <source  src={endLoop+ '#t=0.2'} type="video/mp4"  />
            </video>}
        </VideoHolder>
    )
}

const VideoHolder = styled.div`
    background-color: #E7EDF1;
    video {
        position: fixed;
        right: 0;
        bottom: 0;
        width: 100%    !important;
        height: auto   !important;
    }
`;

