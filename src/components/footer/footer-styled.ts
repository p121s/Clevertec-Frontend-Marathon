import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 56px;
  border-top: 1px solid #bfc4c9;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: center;
    height: 104px;
  }
`;

export const CoryWriteBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;

  @media screen and (max-width: 320px) {
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    margin: 16px 0 20px;
  }
`;

export const SocialBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  gap: 28px;

  @media screen and (max-width: 320px) {
    margin-bottom: 11px;
  }
`;
