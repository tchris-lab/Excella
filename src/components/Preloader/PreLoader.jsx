import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div style={{-i: 1}} className="loader_item" />
        <div style={{-i: 2}} className="loader_item" />
        <div style={{-i: 3}} className="loader_item" />
        <div style={{-i: 4}} className="loader_item" />
        <div style={{-i: 5}} className="loader_item" /> 
        <div style={{-i: 6}} className="loader_item" />
        <div style={{-i: 7}} className="loader_item" />
        <div style={{-i: 8}} className="loader_item" />
        <div style={{-i: 9}} className="loader_item" />
        <div style={{-i: 10}} className="loader_item" />
        <div style={{-i: 11}} className="loader_item" />
        <div style={{-i: 12}} className="loader_item" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .loader .loader_item {
    transform-origin: 40px 40px;
    animation: spinner 1.2s linear infinite;
  }

  .loader .loader_item:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    /* try any color u want (yellow, red, lightskyblue ect...) */
    background: green;
  }

  .loader .loader_item:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  .loader .loader_item:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  .loader .loader_item:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  .loader .loader_item:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  .loader .loader_item:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  .loader .loader_item:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  .loader .loader_item:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  .loader .loader_item:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  .loader .loader_item:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  .loader .loader_item:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  .loader .loader_item:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }

  .loader .loader_item:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes spinner {
    0% {
      opacity: 1;
      filter: hue-rotate(0deg);
    }

    100% {
      opacity: 0;
      filter: hue-rotate(360deg);
    }
  }`;

export default Loader;
