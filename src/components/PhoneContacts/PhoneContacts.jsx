import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Contact,
  ContactItem,
  DeleteButton,
  List,
} from './PhoneContacts.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const PhoneContacts = () => {
  const dispatch = useDispatch();
  const NewFilteredContactsList = useSelector(selectVisibleContacts);

  return (
    <List>
      {NewFilteredContactsList.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactItem>
            {name}: {number}
          </ContactItem>
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </List>
  );
};
export default PhoneContacts;
