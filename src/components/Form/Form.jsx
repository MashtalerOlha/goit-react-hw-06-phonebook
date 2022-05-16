import PropTypes from 'prop-types';
import { SearchCard, Lable, Button } from './Form.Styled';

export function Form({ onSubmit }) {;
  
  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Lable htmlFor="name">Name</Lable>
      <SearchCard
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Lable htmlFor="number">Number</Lable>
      <SearchCard
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
