import itemsStoreContext from "../store/items-store-Context.jsx"; // Default import
import React, { useContext } from "react";
import Item from "./Item";
import styles from "./Appname.module.css"; // Assuming the file exists

const ItemsComponent = ({ items, onDeleteClick }) => {
  const ItemsStoreFromContext = useContext(itemsStoreContext);
  console.log(`ItemsStoreFromContext: ${ItemsStoreFromContext}`); // Fixing string interpolation

  return (
    <div className={styles.itemsContainer}>
      {items.map((item, index) => (
        <Item
          key={index}
          DoName={item.DoName}
          dueDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default ItemsComponent;
