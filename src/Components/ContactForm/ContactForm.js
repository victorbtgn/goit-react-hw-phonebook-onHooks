import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactSelectors from '../../redux/contacts/contacts-selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(contactSelectors.getAllContacts);

  const submit = contact => {
    dispatch(contactsOperations.addContact(contact.name, contact.number));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={values => {
        const errors = {};
        const isExist = items.find(item => item.name === values.name);

        if (isExist) {
          errors.name = `${values.name} is already in contacts.`;
        } else if (!values.name) {
          errors.name = 'Required';
        } else if (!values.number) {
          errors.number = 'Required';
        } else if (values.number.length < 5) {
          errors.number = 'Please fill the correct number, min length 5 numbers';
        } else if (values.number.length > 12) {
          errors.number = 'Please fill the correct number, max length 12 numbers';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        submit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <>
          <h2 className="title">Add new contact</h2>
          <Form>
            <div className="input-form">
              <Field type="text" name="name" className="input" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="input-error" />
            </div>
            <div className="input-form">
              <Field type="tel" name="number" className="input" placeholder="Number" />
              <ErrorMessage name="number" component="div" className="input-error" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn">
              Add contact
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}
