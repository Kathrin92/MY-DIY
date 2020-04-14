import styled from '@emotion/styled';

const Input = styled.input`
  outline: none;
  cursor: pointer;
`;

export const LoginInput = styled(Input)`
  text-align: center;
  width: 274px;
  height: 60px;
  background: white;
  color: white;
  border: 1px #707070 solid;
  border-radius: 30px;
  box-shadow: 0px 3px 6px grey;
  font-size: 22px;
  padding: 0px 0px;
  outline: none;
  cursor: pointer;
  ::-webkit-input-placeholder {
    text-align: center;
    color: #b7b7b7;
  }
  &:focus {
    background-color: #ffffff;
    color: #0e0f09;
  }
`;

export default Input;
