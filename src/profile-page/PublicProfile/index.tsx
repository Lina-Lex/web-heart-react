import React, { useState, useEffect, Children } from "react";
import { Container, Wrapper, ButtonsWrapper, SpaceBetween } from "./styles";
import Button from "../Button";
import Header from "../Header";
import ProfilePicture from "../ProfilePicture";
import DetailInput from "../ProfileDetailInput";

export interface Props {
  placeholder: string;
  title: string;
  full: boolean;
  textArea: boolean;
}

const Index = ({ title, placeholder, full, textArea }: Props): JSX.Element => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <ProfilePicture />
        <ButtonsWrapper>
          <Button dark>Change Picture</Button>
          <Button>Delete Picture</Button>
        </ButtonsWrapper>
      </Wrapper>
      <SpaceBetween>
        <DetailInput />
        <DetailInput placeholder="Last Name" title="Last Name" />
      </SpaceBetween>

      <DetailInput placeholder="Email Address" title="Email Address" full />
      <DetailInput placeholder="Profession" title="Profession" full />

      <DetailInput
        placeholder="Tell us more about you?"
        title="Bio"
        full
        textArea
      />
    </Container>
  );
};

Index.defaultProps = {
  title: "First Name",
  placeholder: "Name",
  full: false,
  textArea: false,
};

export default Index;
