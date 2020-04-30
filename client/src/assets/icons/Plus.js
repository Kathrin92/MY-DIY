import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  border: #ef1846;
`;

function Plus() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="34.875"
      height="34.875"
      viewBox="0 0 34.875 34.875"
    >
      <path
        id="Icon_awesome-plus-circle"
        data-name="Icon awesome-plus-circle"
        d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563ZM28.125,19.969a.846.846,0,0,1-.844.844H20.813v6.469a.846.846,0,0,1-.844.844H16.031a.846.846,0,0,1-.844-.844V20.813H8.719a.846.846,0,0,1-.844-.844V16.031a.846.846,0,0,1,.844-.844h6.469V8.719a.846.846,0,0,1,.844-.844h3.938a.846.846,0,0,1,.844.844v6.469h6.469a.846.846,0,0,1,.844.844Z"
        transform="translate(-0.563 -0.563)"
      />
    </SVG>
  );
}

export default Plus;
