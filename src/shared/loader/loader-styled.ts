import styled, { keyframes } from 'styled-components';

import loader from '../../images/svg/loader.svg';

export const WrapperLoader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: ${document.documentElement.clientHeight}px;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);
  z-index: 60;
`;

export const LoaderAnition = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  width: 68.75px;
  height: 68.75px;
  background: url(${loader}) center / cover no-repeat;
  transform: rotate(0);
  animation: ${LoaderAnition} 0.8s linear infinite;

  @media screen and (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media screen and (max-width: 320px) {
    width: 22px;
    height: 22px;
  }
`;
