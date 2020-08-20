import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import authOps from '../../redux/auth/auth-operations';

export default function LoginPage() {
  const dispatch = useDispatch();

  const submit = user => {
    dispatch(authOps.login(user));
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Required';
        }

        if (!values.password) {
          errors.password = 'Required';
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
          <h2 className="title">Authenticated</h2>
          <Form className="miniContainer">
            <div className="input-form">
              <Field type="email" name="email" className="input" placeholder="Your email" />
              <ErrorMessage name="email" component="div" className="input-error" />
            </div>
            <div className="input-form">
              <Field type="password" name="password" className="input" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="input-error" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn">
              Log in
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}
