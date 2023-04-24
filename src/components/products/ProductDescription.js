import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
const ProductDescription = ({ products }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const location=useLocation();
  useEffect(() => {
   const selectedProductId=location.pathname.split('/')[2]
   products.forEach((item) => {
    item?.products?.forEach((data) => {
      if(data.id=== +selectedProductId) {
        setSelectedItem(...[data])
      } 
      
    });
  });
  }, [ products,location.pathname]);
  const addToCart = (ope,product) => {
    products.forEach((item) => {
      item?.products?.forEach((data) => {
        if(data.id===product.id)  
        if (ope === "inc") {
          data.cartCount++;
        } else {
          data.cartCount--;
        }
      });
    });
  };
  return (
    <div className="productDescription">
            <div className="productcat">
              <img
                className="productImage"
                alt={selectedItem?.title}
                src={selectedItem?.image}
              />
              
             
            </div>
            <div className="productDetails">
            <div className="productdesTitle">{selectedItem?.title}</div>
                {selectedItem.description}
                <div className="priceContainer">
                <div className="price">${selectedItem?.price}</div>
                <button className="addtocart" onClick={() => addToCart("inc",selectedItem)}>
                  Add to cart
                </button>
              </div>
            </div>
         
    </div>
  );
};
export default ProductDescription;
