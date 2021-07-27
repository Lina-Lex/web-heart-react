import React, { useState, useEffect } from "react";
import { Text } from "./styles";

export interface Props {
  children: string;
}

const Index = ({ children }: Props): JSX.Element => {
  return <Text>{children}</Text>;
};

Index.defaultProps = {
  children: "Public Profile",
};

export default Index;
