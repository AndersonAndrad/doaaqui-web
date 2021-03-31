import {Container} from './PrimaryButton.styles';

export default function PrimaryButton(props){
  return (
      <Container>
        <p><strong>{props.text}</strong></p>
      </Container>
  );
}