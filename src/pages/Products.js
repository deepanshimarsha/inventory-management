import SideNavbar from "../component/SideNavbar";
import TopNavbar from "../component/TopNavbar";
import "../styles/product.css";
import { useInventoryContext } from "../context/InventoryContext";
import { NavLink } from "react-router-dom";

export default function Products() {
  const { inventoryState } = useInventoryContext();
  return (
    <div>
      <SideNavbar />

      <div className="product-main">
        <TopNavbar />
        <div className="product-list">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {inventoryState.filteredProduct.map(
                ({
                  id,
                  department,
                  name,
                  description,
                  price,
                  stock,
                  sku,
                  supplier,
                  delivered,
                  imageUrl,
                }) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={imageUrl}
                          alt="product"
                          height="100px"
                          width="100px"
                        />
                      </td>
                      <td>
                        <NavLink to={`/detail/${id}`}>{name}</NavLink>
                      </td>
                      <td>{description}</td>
                      <td>{price}</td>
                      <td>{stock}</td>
                      <td>{supplier}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
