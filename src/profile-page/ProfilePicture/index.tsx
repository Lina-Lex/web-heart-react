import React, { useState, useEffect } from "react";
import { Image } from "./styles";

export interface Props {
  source: string;
}

const Index = ({ source }: Props): JSX.Element => {
  return <Image src={source} />;
};

Index.defaultProps = {
  source:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
};

export default Index;
