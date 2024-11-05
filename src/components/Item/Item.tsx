import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Item.css";
import { useDispatch } from "react-redux";
import { editFormService, removeService } from "../../services/services";

export interface IItem {
  id: string;
  name: string;
  price: number;
}

export const Item = ({ item }: { item: IItem }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeService(item.id));
  };

  const handleEditItem = () => {
    dispatch(editFormService(item.id, item.name, item.price.toString()));
  };

  return (
    <li>
      <div className="item-container">
        <span>
          {item.name} - {item.price}
        </span>
        <EditIcon fontSize="small" onClick={handleEditItem} />
        <DeleteIcon fontSize="small" onClick={handleDeleteItem} />
      </div>
    </li>
  );
};
