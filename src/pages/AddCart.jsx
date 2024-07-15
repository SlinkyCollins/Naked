import "./AddCart.css";
import addIcon from "/src/assets/add.jpg";
import subtractIcon from "/src/assets/subtract.svg";
import darkLikeIcon from "/src/assets/darkLikeIcon.svg";
import shoppingBacketIconWithoutNotification from "/src/assets/shoppingBacketIconWithoutNotification.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "/src/Components/ProductCard.jsx";
import { useEffect } from "react"; // Import useEffect

const AddToCart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, products } = location.state || {};
  const [isAdding, setIsAdding] = useState(1);
  let adder = isAdding;

  const handleProductClick = (product) => {
    console.log("Product clicked:", product); // Debugging log
    navigate("/addtocart", { state: { product, products } });
  };

  const handleAdd = () => {
    adder += 1;
    if (adder > 1) {
      document.getElementById("subtractIcon").style.border = "1px solid black";
    }
    setIsAdding(adder);
  };

  const handleSubtract = () => {
    adder -= 1;
    if (adder <= 1) {
      document.getElementById("subtractIcon").style.border = "none";
      adder = 1;
    }
    setIsAdding(adder);
  };

  // Filter out the current product
  const moreLikeThisProducts = product ? products.filter((p) => p.name !== product?.name) : [];

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {product ?
        (
          <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", justifyContent: "center", margin: "5rem" }}>

              <div style={{ flex: "1" }}>
                <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              <div style={{ flex: "1" }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: "600" }}>{product.name}</h2>
                  <p style={{ color: "#c1694f", fontWeight: "800", fontSize: "2.3875rem" }}>${product.price}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>

                  <div>

                    <p style={{ textTransform: "uppercase", color: "#808285", fontWeight: "700", fontSize: "1.25rem", marginBottom: ".5rem" }}> colours : brown</p>

                    <div className="color-select">

                      <label htmlFor="darkBrown">
                        <input type="radio" name="color" id="darkBrown" />
                        <span className="color-1"></span>
                      </label>

                      <label htmlFor="black">
                        <input type="radio" name="color" id="black" />
                        <span className="color-2"></span>
                      </label>

                      <label htmlFor="lightBrown">
                        <input type="radio" name="color" id="lightBrown" />
                        <span className="color-3"></span>
                      </label>

                    </div>

                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <img src={subtractIcon} alt="" style={{ cursor: "pointer", width: "2rem", height: "2rem", borderRadius: "5px" }} onClick={handleSubtract} id="subtractIcon" />
                    <span style={{ fontSize: "1.2rem" }}>{isAdding}</span>
                    <img src={addIcon} alt="" style={{ cursor: "pointer", width: "2rem", height: "2rem" }} onClick={handleAdd} />
                  </div>

                </div>

                <div style={{ margin: "2rem 0 0" }}>
                  <h3 style={{ fontSize: "1.24rem", fontWeight: "700", color: "#808285" }}>SIZE</h3>

                  <div className="add-to-cart-container">
                    <div className="size-select">
                      <label htmlFor="x-small" className="size-label">
                        <input type="radio" name="size" id="x-small" />
                        <span className="size-circle">XS</span>
                      </label>

                      <label htmlFor="small" className="size-label">
                        <input type="radio" name="size" id="small" />
                        <span className="size-circle">S</span>
                      </label>

                      <label htmlFor="medium" className="size-label">
                        <input type="radio" name="size" id="medium" />
                        <span className="size-circle">M</span>
                      </label>

                      <label htmlFor="large" className="size-label">
                        <input type="radio" name="size" id="large" />
                        <span className="size-circle">L</span>
                      </label>

                      <label htmlFor="x-large" className="size-label">
                        <input type="radio" name="size" id="x-large" />
                        <span className="size-circle">XL</span>
                      </label>
                    </div>
                  </div>

                </div>

                <div style={{ margin: "2rem 0 2rem" }}>
                  <h3 style={{ fontSize: "1.24rem", fontWeight: "700", color: "#808285", marginBottom: ".5rem", textTransform: "uppercase" }}>Description</h3>
                  <p style={{ fontWeight: "500", fontSize: "1.125rem", lineHeight: "30px", width: "95%" }}>Crafted from nude material for a controlled fit, it offers both comfort and style. Pair it with the matching bra to complete your outfit of the day effortlessly.</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ backgroundColor: "rgba(217, 217, 217, 1)", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem", borderRadius: "50%" }}>
                    <img src={darkLikeIcon} alt="" style={{ width: "25px", height: "25px", cursor: "pointer" }} />
                  </div>
                  <div>
                    <button style={{ backgroundColor: "rgba(63, 45, 33, 1)", cursor: "pointer", outline: "none", padding: "1rem 4.5rem", border: "none", borderRadius: "10px", color: "#e8d2ba", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", textAlign: "center", fontSize: "1.375rem", fontWeight: "600" }}><img src={shoppingBacketIconWithoutNotification} style={{ width: "30px", height: "30px" }} />Add To Cart</button>
                  </div>
                </div>
              </div>

            </div>

            <div style={{margin: "4rem 2rem 4rem"}}>
              <h3 style={{fontSize: "1.56rem", fontWeight: "600", margin: "2rem 0"}}>More Like This</h3>
              <div className="filtered-product-grid">
                {moreLikeThisProducts.map((p, index) => (
                  <ProductCard
                    key={index}
                    productImg={p.img}
                    productName={p.name}
                    productPrice={p.price}
                    onClick={() => handleProductClick(p)}
                  />
                ))}
              </div>
            </div>
          </div>
        )
        :
        (
          <div style={{ padding: "2rem", margin: "0 auto", textAlign: "center" }}>
            <p>No Product Selected 😒</p>
          </div>
        )
      }

    </div>
  )
}

export default AddToCart