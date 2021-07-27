import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  padding-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 18px;

  ${media.lessThan("medium")`
    flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height:400px;
  `}
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  margin-left: 12px;
  ${media.lessThan("medium")`
margin-top:18px;
  `}
`;
