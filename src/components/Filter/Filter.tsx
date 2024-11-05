import { useDispatch } from "react-redux";
import { filterService } from "../../services/services";
import "./Filter.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterService(e.target.value));
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="name"
        placeholder="Type filter"
        onChange={onHandleChange}
        required
      />
    </div>
  );
};
