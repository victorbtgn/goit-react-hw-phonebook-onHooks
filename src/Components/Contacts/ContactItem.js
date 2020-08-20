import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';

export default function ContactItem({ id, name, number, onDelete, isLigthTheme }) {
  const convertStringToPhoneNumber = string => Number(string).toLocaleString('ru');

  return (
    <li className="list-item">
      <div className="list-item-data">
        <span>{name}:</span>
        <span>{convertStringToPhoneNumber(number)}</span>
      </div>
      <button className="btnContact" type="button" onClick={() => onDelete(id)}>
        <DeleteIcon htmlColor={isLigthTheme ? '#dae1f8' : '#2e2e2e'} />
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
