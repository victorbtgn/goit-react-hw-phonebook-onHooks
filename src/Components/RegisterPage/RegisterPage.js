import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import authOps from '../../redux/auth/auth-operations';

const RegisterPage = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validate={values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      } else if (!values.email) {
        errors.email = 'Required';
      } else if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 5) {
        errors.password = 'Min password length 5';
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      onSubmit(values);
      setSubmitting(false);
      resetForm();
    }}
  >
    {({ isSubmitting }) => (
      <>
        <h2 className="title">Registration</h2>
        <Form className="miniContainer">
          <div className="input-form">
            <Field type="text" name="name" className="input" placeholder="Your Name" />
            <ErrorMessage name="name" component="div" className="input-error" />
          </div>
          <div className="input-form">
            <Field type="email" name="email" className="input" placeholder="Your email" />
            <ErrorMessage name="email" component="div" className="input-error" />
          </div>
          <div className="input-form">
            <Field type="password" name="password" className="input" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="input-error" />
          </div>
          <button type="submit" disabled={isSubmitting} className="btn">
            Confirm
          </button>
        </Form>
      </>
    )}
  </Formik>
);

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(authOps.register(user)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
