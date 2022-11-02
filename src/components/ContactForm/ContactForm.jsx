import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonAdd, Form, Input, Label, Wrapper } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onContactSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onSubmit, addContact } = this.props;

    onSubmit({ name, number });
    addContact(name, number);
    // checkExistingContact(name);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <Form onSubmit={this.onContactSubmit}>
          <Wrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="number">Number</Label>
            <Input
              id="number"
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Wrapper>
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </Form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  addContact: PropTypes.func,
  checkExistingContact: PropTypes.func,
};
