import { createContext, useReducer, useContext } from "react";
import { InventoryReducer } from "../reducer/InventoryReducer";
import { inventoryData } from "../db/data";
import { useEffect } from "react";

const InventoryContext = createContext(null);

const InventoryContextProvider = ({ children }) => {
  const initialState = {
    products: inventoryData,
    filteredProduct: inventoryData.filter(
      ({ department }) => department === "Kitchen"
    ),
    filterBy: "Kitchen",
    sortBy: "",
    showLowStock: false,
    newProduct: {
      id: "",
      department: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      sku: "",
      supplier: "",
      delivered: "",
      imageUrl: "",
    },
  };

  const [inventoryState, inventoryDispatch] = useReducer(
    InventoryReducer,
    initialState
  );
  console.log(inventoryState);

  useEffect(() => {
    inventoryDispatch({ type: "FILTER_PRODUCTS" });
  }, [
    inventoryState.filterBy,
    inventoryState.sortBy,
    inventoryState.showLowStock,
  ]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <InventoryContext.Provider value={{ inventoryState, inventoryDispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};

const useInventoryContext = () => useContext(InventoryContext);

export { useInventoryContext, InventoryContextProvider };
