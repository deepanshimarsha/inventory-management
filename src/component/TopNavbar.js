import { NavLink } from "react-router-dom";
import { useInventoryContext } from "../context/InventoryContext";
import "../styles/product.css";
export default function TopNavbar() {
  const { inventoryState, inventoryDispatch } = useInventoryContext();
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h4>Products</h4>
        </div>
        <div className="col-3">
          <select
            onChange={(e) => {
              inventoryDispatch({
                type: "SET_FILTER_BY",
                department: e.target.value,
              });
            }}
          >
            <option
              value="Kitchen"
              selected={inventoryState.filterBy === "Kitchen" ? true : false}
            >
              Kitchen
            </option>
            <option
              value="Clothing"
              selected={inventoryState.filterBy === "Clothing" ? true : false}
            >
              Clothing
            </option>
            <option
              value="Toys"
              selected={inventoryState.filterBy === "Toys" ? true : false}
            >
              Toys
            </option>
          </select>
        </div>
        <div className="col-2">
          <input
            type="checkbox"
            checked={inventoryState.showLowStock}
            onChange={() => {
              inventoryDispatch({ type: "SHOW_LOW_STOCK" });
            }}
          ></input>
          <label>Low stock items</label>
        </div>
        <div className="col-2">
          <select
            onChange={(e) => {
              inventoryDispatch({
                type: "SET_SORT_BY",
                property: e.target.value,
              });
            }}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-primary">
            <NavLink to="/add-product"> New</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
