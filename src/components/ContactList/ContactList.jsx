import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactSlice';
import { selectFilter } from '../../redux/filterSlice';
import { deleteContact } from '../../redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const filterLowCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowCase)
    );
  };

  const filteredContacts = getFilteredContacts();

  const getSortedContacts = filterContacts => {
    return filterContacts.sort((a, b) => b.id - a.id);
  };
  const sortedContacts = getSortedContacts(filteredContacts);

  return (
    <ul>
      {sortedContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name} : {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
