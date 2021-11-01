import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContactsAction = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      return await axios.get("/contacts");
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const addContactsAction = createAsyncThunk(
  "contacts/addContacts",
  async (contact) => {
    try {
      return await axios.post("/contacts", contact);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteContactsAction = createAsyncThunk(
  "contacts/deleteContacts",
  async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error.message);
    }
  }
);
