import React from "react";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      <ul className={css.listStyle}>
        {contacts.map((contact) => (
          <li className={css.itemStyle} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
