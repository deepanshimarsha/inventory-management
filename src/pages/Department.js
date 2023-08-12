import { NavLink } from "react-router-dom";
import SideNavbar from "../component/SideNavbar";
import { useInventoryContext } from "../context/InventoryContext";
import "../styles/product.css";
export default function Departments() {
  const { inventoryDispatch } = useInventoryContext();

  return (
    <div>
      <SideNavbar />
      <div className="product-main">
        <div className="department">
          <button type="button" class="btn btn-warning">
            <NavLink
              to="/products"
              onClick={() => {
                inventoryDispatch({
                  type: "SET_FILTER_BY",
                  department: "Kitchen",
                });
              }}
            >
              Kitchen
            </NavLink>
          </button>
          <button type="button" class="btn btn-success">
            <NavLink
              to="/products"
              onClick={() => {
                inventoryDispatch({
                  type: "SET_FILTER_BY",
                  department: "Clothing",
                });
              }}
            >
              Clothing
            </NavLink>
          </button>
          <button type="button" class="btn btn-info">
            <NavLink
              to="/products"
              onClick={() => {
                inventoryDispatch({
                  type: "SET_FILTER_BY",
                  department: "Toys",
                });
              }}
            >
              Toys
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
