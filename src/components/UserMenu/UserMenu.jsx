// import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { Container, LogOutBtn, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);
  // const email = useSelector(authSelectors.selectUserEmail);
  return (
    <Container>
      <UserName>Welcome, {name}</UserName>
      {/* <p>Your email: {email}</p> */}
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutBtn>
    </Container>
  );
};
