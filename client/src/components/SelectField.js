import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  width: 281px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 10px;
  color: #0e0f09;
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 5px;
  margin: 5px;
  margin-bottom: 10px;
`;

export default function SelectField() {
  return (
    <Select class="ui dropdown">
      <option>Dekoration</option>
      <option>Holzarbeiten</option>
      <option>Malerarbeiten</option>
      <option>Restauration</option>
      <option>Upsycling</option>
      <option>X</option>
      <option>X</option>
      <option>X</option>
    </Select>
  );
}
