import PropTypes from 'prop-types';
import { DeleteButton, ItemWrapper } from './ContactItem.styled';

export const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <ItemWrapper>
      <span>{`${name} ${number}`}</span>
      <DeleteButton type="button" onClick={deleteContact}>
        Delete
      </DeleteButton>
    </ItemWrapper>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
