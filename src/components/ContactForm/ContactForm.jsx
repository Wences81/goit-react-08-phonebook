import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as contactsOperations from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = (name, number) =>
    dispatch(contactsOperations.addContactsAction({ name, number }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setNumber(value);
  };

  const checkName = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit(name, number);
      setName("");
      setNumber("");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h2>Добавить новый контакт</h2>
          <Form.Label>Имя</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                onChange={handleChange}
                placeholder="Введите имя"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                onChange={handleChange}
                placeholder="Введите телефон"
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit">Добавить в список контактов</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
