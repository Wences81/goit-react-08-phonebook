import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactAction,
  deleteContactAction,
  fetchContactsAction,
} from "./contacts-operations";
import { changeFilter } from "./contacts-actions";

const entities = createReducer([], {
  [fetchContactsAction.fulfilled]: (_state, action) => action.payload.data,
  [addContactAction.fulfilled]: (state, { payload }) => {
    if (
      state.find(
        (contact) =>
          contact.name.toLowerCase() === payload.data.name.toLowerCase()
      )
    ) {
      alert(`${payload.data.name} is already in contacts`);
      return state;
    }
    return [payload.data, ...state];
  },
  [deleteContactAction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsAction.pending]: () => true,
  [fetchContactsAction.fulfilled]: () => false,
  [fetchContactsAction.rejected]: () => false,
  [addContactAction.pending]: () => true,
  [addContactAction.fulfilled]: () => false,
  [addContactAction.rejected]: () => false,
  [deleteContactAction.pending]: () => true,
  [deleteContactAction.fulfilled]: () => false,
  [deleteContactAction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsAction.rejected]: (_state, action) => action.payload,
  [fetchContactsAction.pending]: null,
  [addContactAction.rejected]: (_state, action) => action.payload,
  [addContactAction.pending]: null,
  [deleteContactAction.rejected]: (_state, action) => action.payload,
  [deleteContactAction.pending]: null,
});

const filter = createReducer("", {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  entities,
  isLoading,
  error,
  filter,
});
