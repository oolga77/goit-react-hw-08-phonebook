import styled from 'styled-components';
export const Form = styled.form`
  width: 320px;
  margin: 0 auto;
  align-content: center;
  padding: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: grey;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all 0.25s;
  border-radius: 10px;
  font-size: 20px;
  background-color: grey;
  color: orange;
  &:hover,
  &:focus {
    transform: scale(1);
    box-shadow: 10px 5px 5px grey;
  }
`;
