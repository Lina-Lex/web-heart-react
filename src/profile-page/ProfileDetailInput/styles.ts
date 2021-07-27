import styled from "styled-components";
import { Input } from "antd";
import "antd/dist/antd.css";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const AntInput = styled(Input)<{ full: boolean }>`
  ${({ full }) => media.lessThan("medium")`
  width: ${full ? "100%" : "130px"};
  `}

  width: ${({ full }) => (full ? "100%" : "180px")};
`;

export const AntTextArea = styled(Input.TextArea)<{ full: boolean }>`
  width: ${({ full }) => (full ? "100%" : "320px")};
`;

export const Title = styled.span`
  color: black;
  font-weight: 500;
`;
