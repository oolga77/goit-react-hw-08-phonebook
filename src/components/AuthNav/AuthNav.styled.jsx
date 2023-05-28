import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  padding: 8px;
  margin-right: 8px;
  font-size: 22px;
  border: solid grey, 2 px;
  border-radius: 10px;
  text-decoration: none;
  background-color: orange;
  color: grey;
  font-size: 15px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;
