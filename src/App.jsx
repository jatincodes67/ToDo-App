import React, { useState } from "react";
import Appname from "./components/Appname";
import AddToDo from "./components/AddToDo";
import ItemsComponent from "./components/ItemsComponents.jsx";
import FunMessage from "./components/FunMessage";
import itemsStoreContext from "./store/items-store.jsx";
import "./App.css";

function App() {
  const firstItems = [
    { DoName: "Buy Backpacks", dueDate: "06/07/24" },
    { DoName: "Buy Stationery", dueDate: "07/07/24" },
    { DoName: "Buy Clothes", dueDate: "08/07/24" },
  ];

  const [items, setItems] = useState(firstItems);

  const handleNewItem = (itemDoName, itemDueDate) => {
    if (itemDoName && itemDueDate) {
      setItems([...items, { DoName: itemDoName, dueDate: itemDueDate }]);
    }
  };
  const handleDeleteItem = (doName) => {
    const newItems = items.filter((item) => item.DoName !== doName);
    setItems(newItems);
  };

  return (
    <itemsStoreContext.Provider>
      <div className="todo-container text-center">
        <Appname />
        <AddToDo onNewItem={handleNewItem} />
        {items.length === 0 && <FunMessage items={items} />}
        <ItemsComponent items={items} onDeleteClick={handleDeleteItem} />
      </div>
    </itemsStoreContext.Provider>
  );
}

export default App;
