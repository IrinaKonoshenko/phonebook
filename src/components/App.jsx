import { useState } from 'react';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  return (
    <div>
      <Contacts />
    </div>
  );
};
