import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactsAction,
  deleteContactsAction,
  fetchContactsAction,
} from "./contacts-operations";
import { changeFilter } from "./contacts-actions";

const entities = createReducer([], {
  [fetchContactsAction.fulfilled]: (_state, { payload }) => payload.data,
  [addContactsAction.fulfilled]: (state, { payload }) => [
    payload.data,
    ...state,
  ],

  [deleteContactsAction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsAction.pending]: () => true,
  [fetchContactsAction.fulfilled]: () => false,
  [fetchContactsAction.rejected]: () => false,
  [addContactsAction.pending]: () => true,
  [addContactsAction.fulfilled]: () => false,
  [addContactsAction.rejected]: () => false,
  [deleteContactsAction.pending]: () => true,
  [deleteContactsAction.fulfilled]: () => false,
  [deleteContactsAction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsAction.rejected]: (_state, { payload }) => payload,
  [fetchContactsAction.pending]: null,
  [addContactsAction.rejected]: (_state, { payload }) => payload,
  [addContactsAction.pending]: null,
  [deleteContactsAction.rejected]: (_state, { payload }) => payload,
  [deleteContactsAction.pending]: null,
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
