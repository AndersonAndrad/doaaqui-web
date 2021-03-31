import {Container} from './SecundaryButton.styles';

export default function SecundaryButton(props){
  return (
      <Container>
        <p><strong>{props.text}</strong></p>
      </Container>
  );
}