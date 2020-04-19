import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  fill: ${(props) => (props.active ? 'red' : '#999')};
`;

function Heart({ active }) {
  return (
    <SVG
      xmls="https://www.w3.org/2000/svg"
      width="24"
      height="21.913"
      viewBox="0 0 24 21.913"
      active={active}
    >
      <path
        d="M12,21.913C34.628,6.679,19.717-5.654,12,2.7,4.283-5.654-10.628,6.679,12,21.913Z"
        transform="translate(0 0)"
      />
    </SVG>
  );
}

Heart.propTypes = {
  active: PropTypes.bool,
};

export default Heart;
