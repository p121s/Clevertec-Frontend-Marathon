import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 96px;

  @media screen and (max-width: 650px) {
    width: calc(100vh - 32px);
  }
`;

export const ModalTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #363636;
`;

export const ModalText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #363636;
`;
