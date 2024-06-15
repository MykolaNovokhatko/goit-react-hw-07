import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p className={css.infoStyle}>
        <span><FaUser /> {contact.name}</span> <span><FaPhone /> {contact.number}</span>
        <button className={css.btn} onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
};

export default Contact;