import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

const initialState = {
  items: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact({ items }, action) {
      items.push(action.payload);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
    deletedContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

 const { addContact, filterContact, deletedContact } =
  contactSlice.actions;

 const getContacts = ({ contacts }) => contacts.items;
 const getFilterContact = ({ contacts }) => contacts.filter;

export const useContactChange = () => {

  const filteredItems = useSelector(getFilterContact);
  const contactItems = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleAddNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contactItems.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts!`);
    }

    return dispatch(addContact(newContact));
  };

  const handeDeleteContact = newContactId => {
    return dispatch(deletedContact(newContactId));
  };

  const hanleChangeFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  const hadnleGetVisibleContacts = () => {
     const normalizedFilter = filteredItems.toLowerCase();
    return contactItems.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return {
    filteredItems,
    deleteContact: handeDeleteContact,
    addNewContact: handleAddNewContact,
    changeFilter: hanleChangeFilter,
    getVisibleContacts: hadnleGetVisibleContacts,
  };
};
