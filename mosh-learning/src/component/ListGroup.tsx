import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item: string) ==> void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0; // can not use to update the react on the fly
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // destructure
  const [name, setName] = useState("");
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function

  // // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  // const getMessage = () => {
  //   items.length == 0 ? <p>No item found</p> : null;
  // };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
