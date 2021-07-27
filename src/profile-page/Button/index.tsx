import React, { useState, useEffect, Children } from "react";
import { Button } from "./styles";

export interface Props {
  dark?: boolean;
  children: string;
}

const Index = ({ children, dark }: Props): JSX.Element => {
  return <Button dark={dark}>{children}</Button>;
};

Index.defaultProps = {
  children: "Delete Picture",
  dark: false,
};

export default Index;
