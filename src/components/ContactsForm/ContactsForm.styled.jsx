import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
`;

export const FormInput = styled.input`
  padding: 5px;
  margin-bottom: 20px;
  height: 20px;
  width: 150px;
  cursor: pointer;
  border-radius: 10px;
`;

export const AddButton = styled.button`
  display: block;
  margin-left: 20px;
  margin-right: auto;
  min-width: 130px;
  height: 35px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  background-color: grey;
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  margin-left: 10px;

  font-size: 19px;
  color: grey;
`;
