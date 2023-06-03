import styled from 'styled-components';

export const ModalForm = styled.div`
  position: absolute;
  width: 528px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 56px;

  @media screen and (max-width: 655px) {
    width: calc(100vw - 16px);
    padding: 24px 16px;
  }
`;

export const WrapperLinkBack = styled.div`
  transform: translate(-56px, -48px);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px 20px 16px;
  gap: 16px;
  width: 528px;
  height: 64px;
  background: #f9f9fa;
  border-radius: 16px 16px 0px 0px;
`;

export const TitleLinkGoBack = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #727272;
`;

export const WrapperTitle = styled.div`
  margin-bottom: 32px;
`;

export const ModalTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1px;
  color: #363636;
  text-transform: capitalize;
  margin-bottom: 8px;
`;

export const Steps = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #363636;
`;
