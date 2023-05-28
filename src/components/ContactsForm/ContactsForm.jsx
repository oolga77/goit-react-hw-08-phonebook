import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { AddButton, Form, FormInput, Label } from './ContactsForm.styled';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Container } from 'pages/Contacts/ContactsPage.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const addNewContact = {
      id: nanoid(),
      name,
      number,
    };
    handleCheck(addNewContact);
    setName('');
    setNumber('');
  };

  const handleCheck = addNewContact => {
    contactList.find(
      contact => contact.name.toLowerCase() === addNewContact.name.toLowerCase()
    )
      ? toast.error(`${name}is already in contacts.`)
      : dispatch(addContact(addNewContact));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label htmlFor="name">
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </Label>
        <Label htmlFor="number">
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Container>
  );
};
