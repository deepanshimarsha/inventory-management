import SideNavbar from "../component/SideNavbar";
import "../styles/product.css";
import "../styles/details.css";
import { useState } from "react";
import { useInventoryContext } from "../context/InventoryContext";

import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const { inventoryDispatch, inventoryState } = useInventoryContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <SideNavbar />
      <div className="product-main">
        <div className="form-main">
          <div>
            <h2>ADD NEW PRODUCT</h2>
            {error && <p className="error">{error}</p>}
          </div>
          <div className="form">
            <form>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Department*</label>
                <select
                  required
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "department",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.department?.inventoryState
                  //       .newProduct.department
                  //   }
                >
                  <option disabled selected>
                    Select Department
                  </option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Toys">Toys</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name*</label>
                <input
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "name",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.name?.inventoryState.newProduct
                  //       .name
                  //   }
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Description*</label>
                <textarea
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "description",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.description?.inventoryState
                  //       .newProduct.description
                  //   }
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Price*</label>
                <input
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "price",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.price?.inventoryState.newProduct
                  //       .price
                  //   }
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Stock*</label>
                <input
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "stock",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.stock?.inventoryState.newProduct
                  //       .stock
                  //   }
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">SKU</label>
                <input
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "sku",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.sku?.inventoryState.newProduct.sku
                  //   }
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Supplier</label>
                <input
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "supplier",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.supplier?.inventoryState
                  //       .newProduct.supplier
                  //   }
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Delivered</label>
                <input
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "delivered",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.delivered?.inventoryState
                  //       .newProduct.delivered
                  //   }
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">ImageUrl*</label>
                <input
                  required
                  onChange={(e) => {
                    inventoryDispatch({
                      type: "CREATE_NEW_PRODUCT",
                      field: "imageUrl",
                      value: e.target.value,
                    });
                  }}
                  //   value={
                  //     inventoryState.newProduct.imageUrl?.inventoryState
                  //       .newProduct.imageUrl
                  //   }
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => {
                  if (
                    inventoryState.newProduct.department === "" ||
                    inventoryState.newProduct.name === "" ||
                    inventoryState.newProduct.price === "" ||
                    inventoryState.newProduct.description === "" ||
                    inventoryState.newProduct.imageUrl === ""
                  ) {
                    setError("Fill all the required Fields");
                  } else {
                    inventoryDispatch({ type: "ADD_NEW_PRODUCT" });
                    inventoryDispatch({ type: "CLEAR_NEW_PRODUCT" });

                    inventoryDispatch({
                      type: "SET_FILTER_BY",
                      department: inventoryState.newProduct.department,
                    });
                    inventoryDispatch({ type: "FILTER_PRODUCTS" });

                    setError("");
                    navigate("/products");
                  }
                }}
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
