import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import Home from "./components/homepage/Home";
import Products from "./components/products/Products";
import ProductDescription from "./components/products/ProductDescription";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, Routes, useNavigate} from "react-router-dom";
export default function App() {
  const [products, setProducts] = useState([]);
  const [singleProduct,setSingleProduct]=useState([]);
  const isinitial = useRef(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isinitial.current) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((products) => {
          const categories = [];
          const categoryItems = [];
          products?.forEach((item) => {
            if (categories.indexOf(item.category) === -1) {
              categories.push(item.category);
              item.cartCount=0;
            }
          });

          categories.forEach((cat) => {
            categoryItems.push({
              categoryName: cat,
              products: products.filter((product) => product.category === cat),
            });
          });
          setProducts(...[categoryItems]);
        });
    }
    isinitial.current = true;
  }, []);
  const setSelectedProduct=(product)=>{
    setSingleProduct(product);
    navigate("/products");

  }
  return (
      <div className="main">
        <Header />
        <div className="subHeader">
          Super deal! free shipping on order above $100
        </div>
        <div className="container">
          <Routes>
          <Route path="/" element={<Home products={products} setSelectedProduct={setSelectedProduct}/>} />
          <Route
            path="/products"
            element={<Products products={products} singleProduct={singleProduct} />}
          />
          <Route path="/products/:id" element={<ProductDescription products={products}/>}/>
          </Routes>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
   
  );
}
