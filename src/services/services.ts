import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  CLEAR_FORM,
  EDIT_FORM_SERVICE,
  EDIT_SERVICE,
  CHANGE_FILTER_FIELD,
} from "../redux/actions/actionTypes.ts";

export function addService(name: string, price: string) {
  return { type: ADD_SERVICE, payload: { name, price } };
}
export function editService(id: string, name: string, price: string) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}
export function removeService(id: string) {
  return { type: REMOVE_SERVICE, payload: { id } };
}
export function changeService(name: string, value: string) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
export function editFormService(id: string, name: string, price: string) {
  return { type: EDIT_FORM_SERVICE, payload: { id, name, price } };
}
export function clearFormService() {
  return { type: CLEAR_FORM, payload: {} };
}
export function filterService(pattern: string) {
  return { type: CHANGE_FILTER_FIELD, payload: { pattern } };
}
