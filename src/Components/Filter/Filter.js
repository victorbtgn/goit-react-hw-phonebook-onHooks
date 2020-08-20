import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-action';
import contactSelectors from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactSelectors.getFilter);
  const contactsLength = useSelector(contactSelectors.getContactsLength);

  const onChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      {contactsLength > 1 && (
        <label>
          Find contacts by name
          <br />
          <input type="text" name="filter" value={filter} className="input" onChange={onChange} />
        </label>
      )}
    </>
  );
}
