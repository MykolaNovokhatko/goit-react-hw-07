import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../redux/store';
import { fetchContacts } from '../../redux/contactsOps';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.appStyle}>
      <h1 className={css.titleStyle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleStyle}>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;