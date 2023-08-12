import SideNavbar from "../component/SideNavbar";
import "../styles/product.css";
import { useParams } from "react-router-dom";
import { useInventoryContext } from "../context/InventoryContext";
import "../styles/details.css";

export default function Detail() {
  const { productId } = useParams();
  const { inventoryState } = useInventoryContext();

  const product = inventoryState.products.find(
    ({ id }) => id === Number(productId)
  );

  return (
    <div>
      <SideNavbar />
      <div className="product-main">
        <div className="product-detail">
          <div>
            <h2>{product.name}</h2>
          </div>
          <div>
            <img src={product.imageUrl} alt="product" width="50%" />
          </div>
          <div className="subdetails">
            <div>Price: {product.price}</div>
            <div>Stock: {product.price}</div>
            <div>Supplier: {product.price}</div>
            <div>Department: {product.price}</div>
            <div>SKU: {product.price}</div>
            <div>Delivered: {product.price}</div>
            <div>Description: {product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
