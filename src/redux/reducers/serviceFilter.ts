import { CHANGE_FILTER_FIELD } from "../actions/actionTypes";

const initialState = {
  pattern: "",
};

export default function serviceFilterReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case CHANGE_FILTER_FIELD:
      const { pattern } = action.payload;
      return { pattern };
    default:
      return state;
  }
}
