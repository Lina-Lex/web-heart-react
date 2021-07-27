import React, { useState, useEffect, Children } from "react";
import { Container, Title, AntInput, AntTextArea } from "./styles";

export interface Props {
  placeholder: string;
  title: string;
  full: boolean;
  textArea: boolean;
}

const Index = ({ title, placeholder, full, textArea }: Props): JSX.Element => {
  return textArea ? (
    <Container>
      <Title>{title}</Title>
      <AntTextArea placeholder={placeholder} full={full} />
    </Container>
  ) : (
    <Container>
      <Title>{title}</Title>
      <AntInput placeholder={placeholder} full={full} />
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
