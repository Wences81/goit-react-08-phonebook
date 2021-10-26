import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContactsAction = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      return await axios.get("/contacts");
    } catch (error) {}
  }
);

export const addContactAction = createAsyncThunk(
  "contacts/addContacts",
  async (contact) => {
    return await axios.post("/contacts", contact);
  }
);

export const deleteContactAction = createAsyncThunk(
  "contacts/deleteContacts",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
  }
);
