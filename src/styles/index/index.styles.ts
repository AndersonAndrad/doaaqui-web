import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
    height: 100vh;
`;

export const FirstContainer = styled.div`
  grid-row: 1/4;
  grid-column: 1/13;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);

  background: #F4F4F4;
`;

export const FirstContainerTitle = styled.div`
  grid-column: 2/2;
  grid-row: 2/3;

  color: #000;
`;

export const FirstContainerDescription = styled.div`
  grid-column: 2/5;
  grid-row: 3/4;

  color: #000;
`;

export const SecondContainer = styled.div`
  grid-row: 4/6;
  grid-column: 1/13;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);

  background: #16193B;
`;

export const SecondContainerTextContainer = styled.div`
  grid-row: 3/3; 
  grid-column: 2/4;
`;

export const SecondContainerButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 

  grid-row: 1/6;
  grid-column: 9/11;
`; 