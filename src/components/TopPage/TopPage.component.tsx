import {Container, DescriptionComponent, OptionsTop, TitleComponent} from './TopPage.styles';

export default function TopPage(props){
  return(
    <Container>
      <OptionsTop>
        <p>{props.back}</p>
      </OptionsTop>
      <TitleComponent>
        <h1>{props.title}</h1>
      </TitleComponent>
      <DescriptionComponent>
        {props.description}
      </DescriptionComponent>
    </Container>
  );
}