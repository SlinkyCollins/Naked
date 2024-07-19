import { useEffect } from "react";
import image from "/src/assets/Rectangle 81.png";
import addIcon from "/src/assets/add.jpg";
import subtractIcon from "/src/assets/subtract.svg";
import { Link } from "react-router-dom";


const CartPage = () => {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex", padding: "6rem 3rem", backgroundColor: "#F6F6F5", gap: "2rem" }}>

      <div style={{ flex: "2", borderRadius: "10px" }}>
        <h2 style={{ textTransform: "capitalize", fontWeight: "700", fontSize: "1.75rem" }}>my cart</h2>


        <div style={{ background: "#fff", borderRadius: "10px", display: "flex", margin: "2rem 0", gap: "2rem" }}>
          <div style={{ padding: "2rem 1rem" }}>
            <img src={image} alt="" style={{ width: "22rem", height: "15rem", objectFit: "cover" }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "4rem" }}>
            <div>
              <h2 style={{ fontWeight: "600", fontSize: "1.25rem", textTransform: "capitalize", marginTop: "-0.5rem" }}>slim girl bodysuit</h2>

              <div>
                <div style={{ marginTop: "2rem" }}>
                  <p style={{ color: "#808285", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase", marginTop: "2rem" }}>colour : <span style={{ color: "#000" }}>brown</span></p>
                  <p style={{ color: "#808285", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase", marginTop: "2rem" }}>size : <span style={{ color: "#000" }}>XS</span></p>
                  <p style={{ color: "#808285", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase", marginTop: "2rem" }}>quantity : <span style={{ color: "#000" }}>1</span></p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
                  <img src={subtractIcon} alt="" style={{ cursor: "pointer", width: "2rem", height: "2rem", borderRadius: "5px" }} id="subtractIcon" />
                  <span style={{ fontSize: "1.2rem" }}>1</span>
                  <img src={addIcon} alt="" style={{ cursor: "pointer", width: "2rem", height: "2rem" }} />
                </div>
              </div>
            </div>

            <div>
              <p style={{ color: "#c1694f", fontWeight: "800", fontSize: "1.625rem" }}>$84</p>
            </div>
          </div>

        </div>
      </div>

      <div style={{ backgroundColor: "#f2ebe3", padding: "2rem 1rem", flex: "1", margin: "4rem 0", borderRadius: "10px" }}>
        <h2 style={{ fontWeight: "600", fontSize: ".875rem", textAlign: "center" }}>Order Summary</h2>

        <div style={{ margin: "2rem .5rem 0" }}>
          <div>
            <p style={{ textTransform: "uppercase", fontSize: ".76rem", letterSpacing: ".05rem", fontWeight: "700" }}>Ord1256690</p>
            <p style={{ color: "#808285", fontWeight: "700", fontSize: ".6rem", margin: ".2rem 0 0" }}>JULY 10, 2024 10:29</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 0" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div>
                <img src={image} alt="" style={{ maxWidth: "81px", width: "100%" }} />
              </div>
              <div>
                <h2 style={{ fontWeight: "600", fontSize: "12px", textTransform: "capitalize", marginTop: "1rem" }}>slim girl bodysuit</h2>
                <p style={{ color: "#808285", fontSize: "9.88px", fontWeight: "700", textTransform: "uppercase", marginTop: ".8rem" }}>colour : <span style={{ color: "#000" }}>brown</span></p>
                <p style={{ color: "#808285", fontSize: "9.88px", fontWeight: "700", textTransform: "uppercase", marginTop: ".5rem" }}>size : <span style={{ color: "#000" }}>XS</span></p>
                <p style={{ color: "#808285", fontSize: "9.88px", fontWeight: "700", textTransform: "uppercase", marginTop: ".5rem" }}>quantity : <span style={{ color: "#000" }}>1</span></p>
              </div>
            </div>
            <div>
              <p style={{ color: "#c1694f", fontWeight: "800", fontSize: "21px" }}>$84</p>
            </div>
          </div>
        </div>


        <div>

          <hr style={{ color: "#E8D2BA", border: "1.3px solid #E8D2BA", width: "95%", margin: "0 auto" }} />

          <div style={{padding: "2rem .5rem 2rem"}}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{color: "#808285", fontSize: ".95rem", fontWeight: "500"}}>Subtotal</p>
              <p style={{ color: "#1E1E1E", fontWeight: "800", fontSize: "18px" }}>$84</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: ".5rem 0" }}>
              <p style={{color: "#808285", fontSize: ".95rem", fontWeight: "500"}}>Delivery fee</p>
              <p style={{ color: "#C1694F", fontWeight: "800", fontSize: "18px" }}>$5</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{color: "#000", fontSize: "1.1rem", fontWeight: "800"}}>Total</p>
              <p style={{ color: "#C1694F", fontWeight: "800", fontSize: "1.3rem" }}>$89</p>
            </div> 
          </div>

        </div>

        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Link to="/checkout" style={{width: "95%"}}><button style={{ width: "100%", outline: "none", background: "#3f2d21", color: "#E8D2BA", border: "1.39px solid #3f2d21", borderRadius: "7px", padding: "1rem 2rem", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}>Proceed to Checkout</button></Link>
          <Link to="/" style={{width: "95%"}}><button style={{ width: "100%", outline: "none", background: "transparent", color: "#3F2D21", border: "none", padding: "1rem 2rem", cursor: "pointer", fontSize: "14px", fontWeight: "500", textDecoration: "underline" }}>Continue Shopping</button></Link>
        </div>

      </div>

    </div>
  )
}

export default CartPage