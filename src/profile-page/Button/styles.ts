import styled from "styled-components";

export const Button = styled.button<{ dark?: boolean }>`
  background-color: ${({ dark }) => (dark ? "#092450" : "#dcdcdc")};
  color: ${({ dark }) => (dark ? "white" : "#1d3062")};
  height: 52px;
  width: 226px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  border: none;

  &:hover {
    border-style: solid;
    border-color: #1e9ff8;
    border-width: 2px;
  }
`;
