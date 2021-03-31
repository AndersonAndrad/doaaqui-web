import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);  

  background: #1E4469;
`;

export const OptionsTop = styled.div`
  grid-row: 2/2;
  grid-column: 2/2;
`;

export const TitleComponent = styled.div`
  grid-row: 4/4;
  grid-column: 3/7;
`;

export const DescriptionComponent = styled.div`
  grid-row: 5/6;
  grid-column: 3/6;
`;
