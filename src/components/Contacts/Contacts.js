export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </ul>
  );
};
