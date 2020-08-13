import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className="list-item">
    <div className="list-item-data">
      <span>{name}:</span>
      <span>{convertStringToPhoneNumber(number)}</span>
    </div>
    <button className="btnContact" type="button" onClick={() => onDelete(id)}>
      <DeleteIcon />
    </button>
  </li>
);

const convertStringToPhoneNumber = string => Number(string).toLocaleString('ru');

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
