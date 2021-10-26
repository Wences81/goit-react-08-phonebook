import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContactsAction } from "../redux/phonebook/phonebook-operations";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
