import {
  CHANGE_SERVICE_FIELD,
  CLEAR_FORM,
  EDIT_FORM_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  name: "",
  price: "",
};

export default function serviceAddReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_FORM_SERVICE:
      const { id, name: serviceName, price } = action.payload;
      return { id, name: serviceName, price };
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
}
