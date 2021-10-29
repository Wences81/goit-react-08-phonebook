import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, ListGroupItem } from "react-bootstrap";
import * as contactsOperations from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import PropTypes from "prop-types";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContactsAction());
  }, [dispatch]);

  const onDeleteContacts = (id) =>
    dispatch(contactsOperations.deleteContactAction(id));

  if (contacts.length === 0) {
    return <h2 className="home-title">Контактов в списке нет</h2>;
  } else {
    return (
      <Container>
        <h2>Список контактов</h2>
        {contacts.map(({ id, name, number }) => (
          <ListGroupItem key={id}>
            {name} : {number}
            <Button onClick={() => onDeleteContacts(id)}>Удалить</Button>
          </ListGroupItem>
        ))}
      </Container>
    );
  }
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContacts: PropTypes.func,
};
