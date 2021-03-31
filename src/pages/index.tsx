import Head from 'next/head'
import {Container, FirstContainer, SecondContainer, FirstContainerTitle, FirstContainerDescription, SecondContainerButtonContainer, SecondContainerTextContainer} from '../styles/index/index.styles';
import SecundaryButton from '../components/SecundaryButton/SecundaryButton.component';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container>
        <FirstContainer>
          <FirstContainerTitle>
            <h1>Doa Aqui</h1>
          </FirstContainerTitle>
          <FirstContainerDescription>
            <p>O <strong>Doa Aqui</strong> é uma ferramenta cujo objetivo é auxiliar pessoas com objetos para doar para outras pessoas e também auxiliar pessoas que precisam de algum objeto e querem via doação. </p>
          </FirstContainerDescription>
        </FirstContainer>
        <SecondContainer>
          <SecondContainerTextContainer>
            <h1>Seja Bem-vindo</h1>
            <p>O que deseja fazer?</p>
          </SecondContainerTextContainer>
          <SecondContainerButtonContainer>
            <SecundaryButton text='Verificar doacoes'/>
            <PrimaryButton text='Fazer doacoes'/>
          </SecondContainerButtonContainer>
        </SecondContainer>
      </Container>
    </>
  )
}