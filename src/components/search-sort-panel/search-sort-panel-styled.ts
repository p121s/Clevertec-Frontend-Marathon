import styled from 'styled-components';

export const WrapperPanel = styled.div`
  position: relative;
  margin-bottom: 32px;
  display: flex;

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 320px) {
    margin-bottom: 19px;
  }
`;

export const RightBlock = styled.div`
  position: absolute;
  display: inline-block;
  right: 0;
`;

export const WrapperChangeViewCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
