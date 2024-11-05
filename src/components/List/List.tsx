import { useSelector } from "react-redux";
import { IItem, Item } from "../Item";
import { RootState } from "../../redux/store";

export const List = () => {
  const items = useSelector((state: RootState) => state.serviceList);
  const { pattern } = useSelector((state: RootState) => state.serviceFilter);
  let filtered_items = null;
  if (pattern) {
    filtered_items = items.filter(
      (item: IItem) =>
        item.name.toLowerCase().includes(pattern.toLowerCase()) ||
        item.price.toString().includes(pattern)
    );
  } else {
    filtered_items = items;
  }
  return (
    <ul>
      {Array.isArray(filtered_items)
        ? filtered_items.map((item: IItem) => (
            <Item key={item.id} item={item} />
          ))
        : null}
    </ul>
  );
};
