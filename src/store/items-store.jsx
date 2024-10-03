import { createContext } from "react";
import itemsStoreContext from "../store/items-store-Context.js";

const itemsStoreContext = createContext([]); // Create a context object

export default itemsStoreContext; // Exporting as default
