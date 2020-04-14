import styled from '@emotion/styled';

const Button2 = styled.button`
  text-align: center;
  width: 180px;
  height: 60px;
  background: #f85c23;
  color: #0e0f09;
  border: 3px #f85c23 solid;
  border-radius: 30px;
  box-shadow: 0px 3px 6px grey;
  font-size: 26px;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    border: 3px #a2a2a1 solid;
  }
  &:active {
    background: #a2a2a1;
  }
`;

export default Button2;
