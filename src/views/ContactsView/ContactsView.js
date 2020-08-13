import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter/Filter';
import ContactList from '../../Components/Contacts/ContactList';
import Section from '../../Common/Section';

import contactSelectors from '../../redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ContactsView = ({ isLoading }) => (
  <section className="miniContainer">
    <Section>
      <ContactForm />
    </Section>

    <Section title="Contacts">
      {isLoading && <Loader type="ThreeDots" color="#0037ec" width={100} className="loader" />}
      <Filter />

      <ContactList />
    </Section>
  </section>
);

const mapStateToProps = state => ({
  // error: contactSelectors.getError(state),
  isLoading: contactSelectors.getLoading(state),
});

export default connect(mapStateToProps)(ContactsView);
