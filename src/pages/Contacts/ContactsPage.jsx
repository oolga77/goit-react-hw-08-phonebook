// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
import PhoneContacts from '../../components/PhoneContacts/PhoneContacts';
import Filter from '../../components/Filter/Filter';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactsForm/ContactsForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { Title } from 'components/Title/Title';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import {
  ContactListContainer,
  Container,
  SubContainer,
} from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactList = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <SubContainer>
        <Title title={'Phonebook'} />
        <ContactForm />
        {isLoading && !error && <Loader />}
      </SubContainer>
      <ContactListContainer>
        {<Title title={'Contacts'} />}
        {contactList.length > 0 && <Filter />}
        {contactList.length === 0 ? (
          <Notification notification={'There are no contacts.'} />
        ) : (
          <PhoneContacts />
        )}
      </ContactListContainer>
    </Container>
  );
};
export default ContactsPage;
