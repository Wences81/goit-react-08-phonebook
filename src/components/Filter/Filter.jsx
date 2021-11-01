import { useSelector, useDispatch } from "react-redux";
import {
  getFilter,
  getContacts,
} from "../../redux/contacts/contacts-selectors";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import { Form, Container } from "react-bootstrap";

export default function Filter() {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => dispatch(changeFilter(e.target.value));

  const onBlurHandler = () => dispatch(changeFilter(""));

  return (
    <>
      {!contacts.length && <h2 style={{ display: "none" }}>Поиск</h2>}
      {contacts.length && (
        <Container>
          <Form>
            <Form.Group>
              <h2>Найти контакт по имени</h2>
              <Form.Control
                type="text"
                value={value}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
            </Form.Group>
          </Form>
        </Container>
      )}
      ;
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
