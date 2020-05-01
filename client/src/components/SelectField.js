import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  background: white;
  color: #a2a2a1;
  border: 1px #a2a2a1 solid;
  border-radius: 10px;
  box-shadow: 0px 3px 6px grey;
  font-size: 1.1rem;
  padding: 5px 5px;
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

const option = styled.option`
  text-align: center;
`;

export default function SelectField() {
  return (
    <Select class="ui dropdown">
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
