import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/contactsSelector';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from 'components/PhoneList/PhoneList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export const UsersPage = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <Filter />
      <ContactList />
      {error && <p>{error.message}</p>}
    </>
  );
};
