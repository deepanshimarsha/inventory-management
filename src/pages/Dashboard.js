import SideNavbar from "../component/SideNavbar";
import { useInventoryContext } from "../context/InventoryContext";
import "../styles/product.css";
export default function Dashboard() {
  const { inventoryState } = useInventoryContext();
  const totalStock = inventoryState.products.reduce(
    (acc, curr) => acc + curr.stock,
    0
  );
  const totalDelivered = inventoryState.products.reduce(
    (acc, curr) => acc + curr.delivered,
    0
  );
  const lowStockItems = inventoryState.products.reduce(
    (acc, curr) => (curr.stock <= 10 ? acc + 1 : acc + 0),
    0
  );

  return (
    <div>
      <SideNavbar />
      <div className="product-main">
        <div className="dashboard">
          <span class="badge badge-light">
            <div className="count">{totalStock}</div>
            <div>stock</div>{" "}
          </span>
          <span class="badge badge-light">
            <div className="count">{totalDelivered}</div>
            <div>delivered</div>
          </span>
          <span class="badge badge-light">
            <div className="count">{lowStockItems}</div>
            <div>low stock items</div>
          </span>
        </div>
      </div>
    </div>
  );
}
