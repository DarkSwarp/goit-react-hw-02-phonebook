import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './contactform.module.css';
import { Button, TextField } from '@mui/material';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  reset() {
    this.setState({ name: '', number: '' });
  }
  handlChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handlSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <form onSubmit={this.handlSubmit} className={css.form}>
        <TextField
          id="standard-search"
          label="Name field"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handlChange}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          required
          className={css.input}
        />
        <TextField
          type="tel"
          label="Number field"
          name="number"
          value={this.state.number}
          onChange={this.handlChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="555-55-55"
          required
          className={css.input}
        />
        <Button
          type="submite"
          variant="contained"
          size="small"
          className={css.btn}
        >
          Add contact
        </Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
