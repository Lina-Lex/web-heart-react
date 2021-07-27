import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  padding-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;

  ${media.lessThan("medium")`
    flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height:300px;
  `}
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Greeting = styled.span`
  font-size: 18px;
  font-weight: 400px;
  color: #27469f;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.lessThan("medium")`
margin-top:18px;
  `}
  ${media.greaterThan("medium")`
margin-left:36px;
  `}
`;
export const ButtonsWrapper = styled.div`
  min-height: 140px;
  display: flex;
  margin-top: 36px;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-left: 12px;
  ${media.lessThan("medium")`
    flex-wrap:nowrap;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
      margin-top: 18px;

  `}
`;
