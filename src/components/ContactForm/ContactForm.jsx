import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.formStyle}>
        <div className={css.itemStyle}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage className={css.errorStyle} name="name" component="div" />
        </div>
        <div className={css.itemStyle}>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage className={css.errorStyle} name="number" component="div" />
        </div>
        <button type="submit" className={css.btnStyle}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;