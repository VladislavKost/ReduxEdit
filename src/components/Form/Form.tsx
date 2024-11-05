import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  changeService,
  clearFormService,
  editService,
} from "../../services/services";
import { RootState } from "../../redux/store";
import "./Form.css";

export const Form = () => {
  const item = useSelector((state: RootState) => state.serviceAdd);

  const dispatch = useDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ("id" in item) {
      dispatch(editService(item.id, item.name, item.price));
    } else {
      dispatch(addService(item.name, item.price));
    }
    dispatch(clearFormService());
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeService(name, value));
  };
  const handleClickCancel = () => {
    dispatch(clearFormService());
  };

  return (
    <div className="form">
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onHandleChange}
          value={item.name}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Amount"
          onChange={onHandleChange}
          value={item.price}
          required
        />
        <button>Save</button>
        {"id" in item ? (
          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>
        ) : null}
      </form>
    </div>
  );
};
