import { useState } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { Title } from './Title/Title';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  function createContact(name, number) {
    setContacts([...contacts, { name, number, id: nanoid() }]);
  }

  const filterContact = useMemo(() => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  }, [filter, contacts]);

  return (
    <div>
      <Title title={'Phonebook'}>
        <Form createContact={createContact} />
      </Title>
      <Title title={'Contacts'}>
        <Filter value={filter} setFilter={setFilter} />
        <Contacts contacts={filterContact} />
      </Title>
    </div>
  );
};
