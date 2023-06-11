import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsLS = JSON.parse(localStorage.getItem('contact'));
    if (contactsLS) {
      setContacts(contactsLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = event => {
    setFilter(event.target.value);
  };

  const addContact = contact => {
    const doubleContact = contacts.some(
      someContact =>
        someContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (doubleContact) {
      alert(
        `Контакт з іменем ${contact.name} вже присутній у телефонній книзі!`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    setContacts(prevContact => [...prevContact, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.phonebookContainer}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm addContact={addContact} />
      <Filter handleSearchChange={handleSearchChange} filter={filter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsLS = JSON.parse(localStorage.getItem('contact'));
//     if (contactsLS) {
//       this.setState({ contacts: contactsLS });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contact', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleSearchChange = event => {
//     this.setState({ filter: event.target.value });
//   };

//   addContact = contact => {
//     this.setState(prevState => {
//       const { contacts } = prevState;
//       const doubleContact = contacts.some(
//         someContact =>
//           someContact.name.toLowerCase() === contact.name.toLowerCase()
//       );

//       if (doubleContact) {
//         alert(
//           `Контакт з іменем ${contact.name} вже присутній у телефонній книзі!`
//         );
//         return;
//       }

//       const newContact = {
//         id: nanoid(),
//         name: contact.name,
//         number: contact.number,
//       };

//       return {
//         contacts: [...contacts, newContact],
//       };
//     });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
// <div className={css.phonebookContainer}>
//   <h2 className={css.title}>Phonebook</h2>
//   <ContactForm addContact={this.addContact} />
//   <Filter handleSearchChange={this.handleSearchChange} filter={filter} />
//   <ContactList
//     contacts={filteredContacts}
//     deleteContact={this.deleteContact}
//   />
//   {/* Обратите внимание на изменение здесь */}
// </div>
//     );
//   }
// }
