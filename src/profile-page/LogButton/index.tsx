import React, { useState, useEffect, Children } from "react";
import { Button, Right } from "./styles";
import { MdAdd } from "react-icons/md";

export interface Props {
  children: string;
}

const Index = ({ children }: Props): JSX.Element => {
  return (
    <Button>
      {children}
      <Right>
        <MdAdd size={30} color="#65656" />
      </Right>
    </Button>
  );
};

Index.defaultProps = {
  children: "Log Your Blood Pressure",
};

export default Index;
