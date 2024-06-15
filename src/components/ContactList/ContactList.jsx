import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <ul className={css.listStyle}>
      {contacts.map(contact => (
        <li className={css.itemStyle} key={contact.id}>
          <Contact contact={contact} />
          {/* <button onClick={() => handleDelete(contact.id)}>Delete</button> */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
