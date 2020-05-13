import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  display: flex;
  text-align: center;
  background: white;
  color: #a2a2a1;
  border: 1px #a2a2a1 solid;
  border-radius: 10px;
  box-shadow: 0px 3px 6px grey;
  font-size: 1.1rem;
  padding: 2px 8px;
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
      <option>Projekttage</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
    </Select>
  );
}
