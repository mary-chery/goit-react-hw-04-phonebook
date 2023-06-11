import React, { useState } from 'react';
import css from '../app.module.css';
// import PropTypes from 'prop-types';

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }

    if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.contactFormContainer}>
          <h2 className={css.formTitle}>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я може містити лише літери, апостроф, дефіс та пробіли. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />

          <button className={css.addButton} type="submit">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
}

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.addContact({ name, number });
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
// <div>
//   <form onSubmit={this.handleSubmit}>
//     <div className={css.contactFormContainer}>
//       <h2 className={css.formTitle}>Name</h2>
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Ім'я може містити лише літери, апостроф, дефіс та пробіли. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={name}
//         onChange={this.handleChange}
//       />

//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         value={number}
//         onChange={this.handleChange}
//       />

//       <button className={css.addButton} type="submit">
//         Add contact
//       </button>
//     </div>
//   </form>
// </div>
//     );
//   }
// }

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
