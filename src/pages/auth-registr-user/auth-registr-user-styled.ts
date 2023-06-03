import styled from 'styled-components';

export const WrapperPage = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: calc(100vh);
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
`;

export const Cleverland = styled.h1`
  display: inline-block;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #ffffff;
  position: relative;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 655px) {
    font-size: 18px;
    line-height: 28px;
    top: 16px;
  }
`;
