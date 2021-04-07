import TopPage from '../../components/TopPage/TopPage.component';
import { 
  Container, 
  Card, 
  ContainerButtons, 
  ContainerCard, 
  ContainerSearch, 
  Search, 
  BigButton,
  CardAdress,
  CardBottomContainer,
  CardDescription,
  CardImage,
  CardName,
  Image, 
  CardTitleContainer,
  Select,
  ContainerFirstPart,
  ButtonsCardImage,
  CardImageContainer,
  CardDescriptionContainer
} from '../../styles/donations/index.styles';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton.component';
import SecundaryButton from '../../components/SecundaryButton/SecundaryButton.component';

export default function Donations(){
  return(
    <>
      <TopPage
        back='voltar'
        title='Aqui esta a lista de todos os objetos
        para doacao na sua localizacao'
        description=''
      />
      <Container>
        <ContainerSearch>
          <Search/>
        </ContainerSearch>
        <ContainerButtons>
          <PrimaryButton text='Filtro'/>
          <PrimaryButton text='Ordem'/>
          <Select>
            <option value="">Doacoes</option>
            <option value="">Privacidade</option>
            <option value="">Seguranca</option>
          </Select>
          <BigButton>Cadastrar um objeto</BigButton>
        </ContainerButtons>
        <ContainerCard>
          <Card>
            <ContainerFirstPart>
              <Image>
                
              </Image>
              <CardTitleContainer>
                <CardName>test</CardName>
                <CardAdress>test</CardAdress>
              </CardTitleContainer>
            </ContainerFirstPart>
            <CardImageContainer>
            <ButtonsCardImage></ButtonsCardImage>
            <CardImage>
              asfasfasdf
            </CardImage>
            <ButtonsCardImage></ButtonsCardImage>
            </CardImageContainer>
            <CardDescriptionContainer>
              <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos, totam rem enim iste libero velit sunt doloribus quos tempora maxime perspiciatis fuga amet laudantium natus a, repellendus nisi accusamus?</CardDescription>
            </CardDescriptionContainer>
            <CardBottomContainer>
              <label htmlFor="">Compartilhar</label>
              <label htmlFor="">Adicionar a lista de desejos</label>
              <PrimaryButton text='Entrar em contato'/>
            </CardBottomContainer>
          </Card>
        </ContainerCard>

        <ContainerCard>
          <Card>
            <ContainerFirstPart>
              <Image>
                
              </Image>
              <CardTitleContainer>
                <CardName>test</CardName>
                <CardAdress>test</CardAdress>
              </CardTitleContainer>
            </ContainerFirstPart>
            <CardImageContainer>
            <ButtonsCardImage></ButtonsCardImage>
            <CardImage>
              asfasfasdf
            </CardImage>
            <ButtonsCardImage></ButtonsCardImage>
            </CardImageContainer>
            <CardDescriptionContainer>
              <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos, totam rem enim iste libero velit sunt doloribus quos tempora maxime perspiciatis fuga amet laudantium natus a, repellendus nisi accusamus?</CardDescription>
            </CardDescriptionContainer>
            <CardBottomContainer>
              <label htmlFor="">Compartilhar</label>
              <label htmlFor="">Adicionar a lista de desejos</label>
              <PrimaryButton text='Entrar em contato'/>
            </CardBottomContainer>
          </Card>
        </ContainerCard>

        
      </Container>
    </>
  )
}