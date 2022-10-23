import logo from "./logo.svg";
import "./App.css";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/" element={<Products/>} />
        <Route path="/updateProduct/:id" element={<AddProduct />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
