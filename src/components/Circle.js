import React from 'react';
import mediaVideo from '../assets/gif/test.gif';

export const CircleComponent = () => {
    function toggleClasses(targetImg) {
        targetImg.classList.add("transitionGif");
    }

    return (
        <>
            <img src={mediaVideo} class="Lens LensWrapper" onClick={(e) => toggleClasses(e.target)}/>
        </>
    )
}