import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Departments from "./pages/Department";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/department" element={<Departments />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
