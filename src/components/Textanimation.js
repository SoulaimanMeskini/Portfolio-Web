import React from 'react';
import styled from 'styled-components';

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Soulaiman Meskini", "Age : 21", "A Male ;)"];
const typingDelay = 150;
const erasingDelay = 50;
const newTextDelay = 1200;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

export const App = () => {
    return (
      <>
        <TypingAnimation>
                <p class="text-uppercase"><span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
        </TypingAnimation>
      </>
    )
  }

  
  const TypingAnimation = styled.div`
  p {
    font-weight: 700;
    color: whitesmoke;
    text-decoration: none;
    font-size: 3em;
    letter-spacing: 2px;
    transform: 0.6s;
}
`;