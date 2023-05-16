
import React from 'react';
import { ContactsList, ContactItem, Button } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/Selectors';
import { deleteContact } from '../redux/ContactsSlice';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch(); 

    const filteredContacts = contacts?.filter(contact =>
        contact?.name?.toLowerCase().includes(filter.toLowerCase()));

    const onDeleteContact = id => {
        dispatch(deleteContact(id)); 
    };
 if (!filteredContacts?.length) {
    return <p>No contacts found.</p>;
  }
    return (
        <ContactsList>
            {filteredContacts.map(contact => {
                const { id, name, number } = contact; 
                return (
                    <ContactItem key={id}> 
                        <p>{name}: {number}</p> 
                        <Button button type="submit" onClick={() => onDeleteContact(id)}>Delete</Button>
                    </ContactItem>
                );
            })}
        </ContactsList>
    );
};

