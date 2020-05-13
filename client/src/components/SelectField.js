import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  width: 80%;
  padding: 2px 8px;
  height: 25px;
  background-color: #ffffff;
  text-align: center;
  background: white;
  color: #a2a2a1;
  border: 1px #a2a2a1 solid;
  border-radius: 10px;
  box-shadow: 0px 3px 6px grey;
  font-size: 1.1rem;
  margin: 10px;
  outline: none;
  &:hover {
    color: #a2a2a1;
    border: 3px #a2a2a1 solid;
  }
  cursor: pointer;
  &::placeholder {
    text-align: center;
    color: #b7b7b7;
  }
  &:focus {
    background-color: #ffffff;
    color: #0e0f09;
  }
`;

export default function SelectField() {
  return (
    <Select>
      <option>Projekttyp</option>
      <option>Dekoration</option>
      <option>Holzarbeiten</option>
      <option>Malerarbeiten</option>
      <option>Restauration</option>
      <option>Upsycling</option>
      <option>Sonstiges</option>
    </Select>
  );
}
