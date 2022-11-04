import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';

export const UpdateForm = ({ contact, closeForm }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContact({ ...contact, name, number }));
    setName('');
    setNumber('');
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{' '}
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        Number:{' '}
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
