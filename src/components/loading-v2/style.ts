import styled from 'styled-components'

export const LoadingV2Wrapper = styled.div`
  .load {
    font-size: 0px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 15px rgba(255, 255, 255, 0.5);
    background-image: linear-gradient(to left, #fff 11%, #000 50%);
    position: relative;
    z-index: -2;
    animation: loading 2s linear infinite;
  }
  .load::after {
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    left: 100px;
    top: 100px;
    border-radius: 0 0 200px 0px;
    background-color: #fff;
    z-index: -1;
  }
  .load::before {
    width: 170px;
    height: 170px;
    position: absolute;
    content: '';
    top: 15px;
    left: 15px;
    border-radius: 50%;
    background-color: #000;
  }
  @keyframes loading {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(-360deg);
    }
  }
`
