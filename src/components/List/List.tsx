import { useSelector } from "react-redux";
import { IItem, Item } from "../Item";
import { RootState } from "../../redux/store";

export const List = () => {
  const items = useSelector((state: RootState) => state.serviceList);

  return (
    <ul>
      {Array.isArray(items)
        ? items.map((item: IItem) => <Item key={item.id} item={item} />)
        : null}
    </ul>
  );
};
