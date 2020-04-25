import styled from '@emotion/styled';

const Input = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;
  background: white;
  color: #a2a2a1;
  border: 1px #a2a2a1 solid;
  border-radius: 10px;
  box-shadow: 0px 3px 6px grey;
  font-size: 1.2rem;
  padding: 0px 0px;
  outline: none;
  &:hover {
    color: #ffffff;
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

export default Input;
