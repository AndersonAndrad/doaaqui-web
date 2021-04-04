import { Container, FormContainer, Form, InputType, InputContainer, InputTitle, BottonContainer, ButtonsContainer, Info, Term, TitlePartForm, InputTypeSmall} from '../../styles/registeruser/index.styles';
import TopPage from '../../components/TopPage/TopPage.component';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton.component';
import SecundaryButton from '../../components/SecundaryButton/SecundaryButton.component';

export default function RegisterUser(){
  return (
    <>
        <TopPage 
          back='voltar' 
          title='Que incrivel que você tem coisas para doar' 
          description='Antes de disponibilizar as suas doações precisamos saber alguns dados seus'
        />
    <Container>
        <FormContainer>
          <Form>
          <TitlePartForm>Suas informacoes</TitlePartForm>
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Nome Completo
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Email
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Senha
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Confirmar senha
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                WhatsApp
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
          <TitlePartForm>Informacoes de endereco</TitlePartForm>
          {/* start - repeat this part */}
          <InputContainer>
              <InputTitle>
                CEP
              </InputTitle>
              <InputTypeSmall/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Estado
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Cidade
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Bairro
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
            {/* start - repeat this part */}
            <InputContainer>
              <InputTitle>
                Complemento
              </InputTitle>
              <InputType/>
            </InputContainer>
            {/* end - repeat this part */}
          </Form>
          <BottonContainer>
            <Info>! Completar todas as informacoes</Info>
            <Term>Termos</Term>
            <ButtonsContainer>
              <SecundaryButton text='Aceitar termos de uso'/>
              <PrimaryButton text='Salvar' />
            </ButtonsContainer>
          </BottonContainer>
        </FormContainer>
      </Container>
    </>
  )
}