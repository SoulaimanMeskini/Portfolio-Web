import styled from 'styled-components';

export const App = () => {
  return <AppBody>
    <Container>
      <Row>
        <TopLeft />
        <TopMiddle />
        <TopRight />
      </Row>
      <Row style={{ height: '100%' }}>
        <MiddleLeft /> 
        <MainCircle />
        <MiddleRight />
      </Row>
      <Row>
        <BottomLeft />
        <BottomMiddle />
        <BottomRight />
      </Row>      
    </Container>
  </AppBody>
}


const AppBody = styled.div`
  height: 100%;
  background-color: black;
`;

const Container = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
    width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  > div  {

    &:nth-child(1) {
      background-color: red!important;
    };

    &:nth-child(2) {
      height: 100%;
      background-color: green!important;
    };
    
    &:nth-child(3) {
      background-color: yellow!important;
    };

    height: 200px;
    width: 200px;
  }
`;

const TopLeft = styled.div`
  border-left: 1px solid white;
  border-bottom: 1px solid white;
`
const TopMiddle =styled.div`
  height: 100px;
`;

const TopRight = styled.div``
const MiddleLeft = styled.div`
  height:100%;
`
const MiddleRight = styled.div`
  height:100%;
  `
const BottomLeft = styled.div``
const BottomMiddle = styled.div`
  height: 100px;
`
const BottomRight=styled.div``




const MainCircle  = () => {
  return <MainCircleBody>

  </MainCircleBody>
}

const MainCircleBody= styled.div`
  height: 500px!important;
  width: 500px!important;
  border-radius: 100%;
  background-color: white;
`;



