import React from "react";

const Home = ({ products, setSelectedProduct }) => {
  return (
    <div className="homeContainer">
      {products?.map((product, index) => {
        return (
          <div
            className="productcat"
            onClick={() => setSelectedProduct(product)}
            key={`${product.categoryName}-${index}`}
          >
            {product?.products?.length > 0 && (
              <img
                className="productImage"
                alt={product.categoryName}
                src={product?.products[0]?.image}
              />
            )}
            <div className="productTitle">{product.categoryName}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
