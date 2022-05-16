import { ContactCard, Contact, Button } from './ContactList.Styled';

export const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ContactCard>
      {items.map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactCard>
  )
};

