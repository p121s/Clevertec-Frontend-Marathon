import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const ToastsContainerStyled = styled(ToastContainer)`
  box-sizing: border-box;
  max-width: 1150px;
  margin-top: 28px;
  &&&.Toastify__toast-container {
    box-sizing: border-box;
    width: 100%;

    @media screen and (max-width: 768px) {
      width: calc(100% - 90px);
    }

    @media screen and (max-width: 320px) {
      width: 100%;
    }
  }
  .Toastify__toast {
    border: none;
    background: transparent;
    box-shadow: none;
  }

  .Toastify__progress-bar {
    display: none;
  }

  .Toastify__toast-icon {
    position: absolute;
    top: 45px;
    left: 33px;
  }

  .Toastify__close-button {
    position: absolute;
    top: 47px;
    right: 33px;
    width: 14px;
    height: 14px;
  }

  &&&.Toastify__close-button > svg {
    fill: #363636;
    height: 14px;
    width: 14px;
  }

  &&&.Toastify__toast-theme--colored.Toastify__toast--error {
    background: #feebea;
    border: 1.5px solid #f42c4f;
    border-radius: 5px;
  }
`;
