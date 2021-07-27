import { Container, Wrapper, ButtonsWrapper, Greeting, Row } from "./styles";
import Header from "../Header";
import ProfilePicture from "../ProfilePicture";
import LogButton from "../LogButton";

export interface Props {
  username: string;
}

const Index = ({ username }: Props): JSX.Element => {
  return (
    <Container>
      <Header>Your Personal Health Information</Header>
      <Wrapper>
        <ProfilePicture />
        <Row>
          <Greeting>Hi {username}</Greeting>
          <span>How is your health today?</span>
        </Row>
      </Wrapper>
      <ButtonsWrapper>
        <LogButton />
        <LogButton />
        <LogButton />
        <LogButton />
        <LogButton />
      </ButtonsWrapper>
    </Container>
  );
};

Index.defaultProps = {
  username: "Sara Parra",
};

export default Index;
