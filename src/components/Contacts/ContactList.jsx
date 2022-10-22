import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { ContactItems } from './ContactList.styled';

export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <ContactItems>
      {visibleContacts.length >= 1 &&
        visibleContacts.map(({ name, number, id }) => (
          <li key={id}>
            <ContactItem
              name={name}
              number={number}
              id={id}
              deleteContact={() => deleteContact(id)}
            />
          </li>
        ))}
    </ContactItems>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
