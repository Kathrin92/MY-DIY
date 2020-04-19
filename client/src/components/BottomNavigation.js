import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.ul`
  height: 56px;
  background: #f85c23;
  list-style: none;
  display: flex;
  justify-content: center;
  border: 1px solid #707070;
  font-family: 'roboto';
`;

const NavigationItem = styled.li`
  max-width: 168px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  color: ${(props) => (props.active ? '#707070' : 'inherit')};
`;

function BottomNavigation({ links, value, onItemClick }) {
  return (
    <Container>
      {links.map((link) => (
        <NavigationItem
          key={link.label}
          active={value === link.label}
          onClick={() => onItemClick(link.label)}
        >
          <link.Icon active={value === link.label} />
          {link.label}
        </NavigationItem>
      ))}
    </Container>
  );
}

BottomNavigation.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default BottomNavigation;
