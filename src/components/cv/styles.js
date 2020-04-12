import styled from "styled-components";

export const Content = styled.div`
  padding: 15px 10px 55px 10px;
`;

export const CvContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  width: 80vw;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
