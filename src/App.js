import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const Button = (p) => {
  const { text } = p;
  const ButtonRef = useRef(null);



  useEffect(() => {
    console.log('test je moeder')
   
  }, [p.text])

  return <ButtonBody ref={ButtonRef}>
    <p>{p.text}</p>
  </ButtonBody>
}


const ButtonBody = styled.div`
  padding: 10px;
  cursor: pointer;
`;

