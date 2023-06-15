import PropTypes from 'prop-types';
import css from './contaxtlist.module.css';
import { Button } from '@mui/material';

export function ContactList({ contacts, deleteContact }) {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {name}: {number}
            <Button
              variant="contained"
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
