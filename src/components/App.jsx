import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.Styled';
import { useContactChange } from './redux/contactsSlice';
import { Toaster } from 'react-hot-toast';


export function App() {
  const {filteredItems, deleteContact,addNewContact, changeFilter, getVisibleContacts} = useContactChange()

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filteredItems} onChange={changeFilter} />
      <ContactList
        onDeleteContact={deleteContact}
        items={getVisibleContacts()}
      />
      <Toaster/>
    </Container>
  );
}
