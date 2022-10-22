import PropTypes from 'prop-types';
import { FilterWrapper, InputFilter, FilterText } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <FilterText>Find contacts by name</FilterText>
      <InputFilter type="text" value={value} onChange={onChange} />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
