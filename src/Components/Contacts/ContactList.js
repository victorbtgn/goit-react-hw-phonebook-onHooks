import React, { useEffect } from 'react';
import ContactItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactSelectors from '../../redux/contacts/contacts-selectors';
import authSelectors from '../../redux/auth/auth-selectors';

import { Transition } from 'react-spring/renderprops';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.getVisibleContacts);
  const theme = useSelector(authSelectors.getTheme);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

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

  const removeContact = id => {
    dispatch(contactsOperations.deleteContact(id));
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
                onDelete={() => removeContact(item.id)}
                isLigthTheme={theme}
              />
            </div>
          )}
        </Transition>
      )}
    </ul>
  );
}
