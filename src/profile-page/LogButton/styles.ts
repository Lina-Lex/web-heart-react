import styled from "styled-components";
import media from "styled-media-query";

export const Button = styled.button`
  background-color: #c8e1fd;
  height: 43px;
  max-width: 320px;
  width: 100%;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
  border: none;

  &:hover {
    border-style: solid;
    border-color: #1e9ff8;
    border-width: 2px;
  }

  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  padding-left: 24px;
  margin-top: 12px;

  box-shadow: 0 4px 2px -2px gray;

  ${media.lessThan("medium")`
  font-size: 12px;
  `}
`;

export const Right = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;
