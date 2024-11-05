import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
} from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

export default function serviceListReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case EDIT_SERVICE:
      const { id: editId, name: editName, price: editPrice } = action.payload;
      return state.map((service) => {
        if (service.id === editId) {
          return { ...service, name: editName, price: editPrice };
        }
        return service;
      });
    case REMOVE_SERVICE:
      const { id: removeId } = action.payload;
      return state.filter((service) => service.id !== removeId);
    default:
      return state;
  }
}
