const InventoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_BY": {
      return { ...state, filterBy: action.department };
    }
    case "SET_SORT_BY": {
      return {
        ...state,
        sortBy: action.property,
      };
    }
    case "SHOW_LOW_STOCK": {
      return {
        ...state,
        showLowStock: !state.showLowStock,
      };
    }

    case "FILTER_PRODUCTS": {
      let newFilteredProducts = state.products.slice();

      if (state.filterBy === "Kitchen") {
        newFilteredProducts = newFilteredProducts.filter(
          ({ department }) => department === "Kitchen"
        );
      }
      if (state.filterBy === "Clothing") {
        newFilteredProducts = newFilteredProducts.filter(
          ({ department }) => department === "Clothing"
        );
      }
      if (state.filterBy === "Toys") {
        newFilteredProducts = newFilteredProducts.filter(
          ({ department }) => department === "Toys"
        );
      }

      if (state.sortBy === "name") {
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => a.name - b.name
        );
      }

      if (state.sortBy === "price") {
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => b.price - a.price
        );
      }

      if (state.sortBy === "stock") {
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => b.stock - a.stock
        );
      }
      if (state.showLowStock) {
        newFilteredProducts = newFilteredProducts.filter(
          ({ stock }) => stock <= 10
        );
      }
      console.log(newFilteredProducts);
      return {
        ...state,
        filteredProduct: newFilteredProducts,
      };
    }
    case "CREATE_NEW_PRODUCT": {
      if (action.field === "department") {
        return {
          ...state,
          newProduct: { ...state.newProduct, department: action.value },
        };
      }
      if (action.field === "name") {
        return {
          ...state,
          newProduct: { ...state.newProduct, name: action.value },
        };
      }
      if (action.field === "description") {
        return {
          ...state,
          newProduct: { ...state.newProduct, description: action.value },
        };
      }
      if (action.field === "price") {
        return {
          ...state,
          newProduct: { ...state.newProduct, price: action.value },
        };
      }
      if (action.field === "stock") {
        return {
          ...state,
          newProduct: { ...state.newProduct, stock: action.value },
        };
      }
      if (action.field === "sku") {
        return {
          ...state,
          newProduct: { ...state.newProduct, sku: action.value },
        };
      }
      if (action.field === "supplier") {
        return {
          ...state,
          newProduct: { ...state.newProduct, supplier: action.value },
        };
      }
      if (action.field === "delivered") {
        return {
          ...state,
          newProduct: { ...state.newProduct, delivered: action.value },
        };
      }
      if (action.field === "imageUrl") {
        return {
          ...state,
          newProduct: {
            ...state.newProduct,
            imageUrl: action.value,
            id: state.products.length + 1,
          },
        };
      }
      break;
    }
    case "ADD_NEW_PRODUCT": {
      return {
        ...state,
        products: [...state.products, state.newProduct],
      };
    }
    case "CLEAR_NEW_PRODUCT": {
      return {
        ...state,
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
    }
    default:
      throw new Error("Unknown action type");
  }
};
export { InventoryReducer };
