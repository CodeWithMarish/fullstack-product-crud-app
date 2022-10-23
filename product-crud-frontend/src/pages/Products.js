import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { getProducts } from "../features/apiCalls";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await getProducts();
      if (error) {
        console.log(error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container py-10 w-full max-w-5xl">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text--title">Products Inventory</h2>
        <Link to="/addProduct">
          <button>Add Product</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-6 md:gap-6">
        {products.length > 0 ? (
          products.map((product) => {
            return <Product key={product.productId} {...product} />;
          })
        ) : (
          <p>No Products Found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
