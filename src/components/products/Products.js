import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Products = ({ products, singleProduct }) => {
  const [allItems, setAllItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const data = singleProduct?.categoryName ? [singleProduct] : products;
    setAllItems(...[data]);
  }, [singleProduct, products]);
  const addToCart = (ope,product) => {
    allItems.forEach((item) => {
      item?.products?.forEach((data) => {
        if(data.id===product.id)  
        if (ope === "inc") {
          data.cartCount++;
        } else {
          data.cartCount--;
        }
      });
    });
    setAllItems(...[allItems]);
  };
  return (
    <div className="homeContainer">
      {allItems?.map((item) => {
        return item.products.map((product, index) => {
          return (
            <div className="productcat" onClick={()=>navigate(`/products/${product.id}`)} key={`${product.title}-${index}`}>
              <img
                className="productImage"
                alt={product?.title}
                src={product?.image}
              />
              <div className="productTitle">{product?.title}</div>
              <div className="priceContainer">
                <div className="price">${product?.price}</div>
                <button className="addtocart" onClick={() => addToCart("inc",product)}>
                  Add to cart
                </button>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};
export default Products;
