import PropTypes from 'prop-types';
import css from './filter.module.css';
import { TextField } from '@mui/material';

export function Filter({ value, onChange }) {
  return (
    <div className={css.wrap}>
      <TextField
        className={css.input}
        id="standard-search"
        label="Find contact by name"
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
