import React, { useEffect } from 'react';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import authSelectors from '../../redux/auth/auth-selectors';

import { Transition } from 'react-spring/renderprops';

const ContactList = ({ contacts, theme, fetchContacts, onDelete }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const sortByName = () => {
    if (contacts.length === 0) return false;

    return contacts.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  };

  return (
    <ul className="list">
      {sortByName() && (
        <Transition
          items={sortByName()}
          keys={item => item.id}
          from={{ transform: 'scaleY(0)', opacity: 0 }}
          enter={{ transform: 'scaleY(1)', opacity: 1 }}
          leave={{ transform: 'scaleY(2)', opacity: 0 }}
          config={{ duration: 150 }}
        >
          {item => props => (
            <div style={props}>
              <ContactItem
                key={item.id}
                id={item.id}
                name={item.name}
                number={item.number}
                onDelete={() => onDelete(item.id)}
                isLigthTheme={theme}
              />
            </div>
          )}
        </Transition>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactSelectors.getVisibleContacts(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  theme: authSelectors.getTheme(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
