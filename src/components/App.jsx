import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Box } from 'Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  formSubmitHandler = data => {
    return data;
  };

  filter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  checkExistingContact = contact => {
    const { contacts } = this.state;

    if (contacts.find(({ name }) => name === contact)) {
      return alert(`${contact} is already in contacts`);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <ThemeProvider theme={theme}>
        <Box
          mt={5}
          ml={5}
          mr={5}
          pt={4}
          pb={4}
          pl={4}
          pr={4}
          boxShadow="boxShadow"
        >
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.formSubmitHandler}
            addContact={this.addContact}
            checkExistingContact={this.checkExistingContact}
          ></ContactForm>

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.filter}></Filter>
          <ContactList
            visibleContacts={visibleContacts}
            deleteContact={this.deleteContact}
          ></ContactList>
        </Box>
      </ThemeProvider>
    );
  }
}
