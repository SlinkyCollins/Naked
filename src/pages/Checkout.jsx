import backBtn from "/src/assets/back-btn.svg";
import image from "/src/assets/Rectangle 81.png";
import user from "/src/assets/User.svg";
import edit from "/src/assets/penEdit.svg";
import locationIcon from "/src/assets/locationIcon.svg";
import { useEffect } from "react";


const Checkout = () => {
  
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex", backgroundColor: "#F6F6F5" }}>

      <div style={{ flex: "2", padding: "2rem 3rem 6rem" }}>
        <div>
          <h1 style={{ textTransform: "uppercase", fontSize: "1.125rem", fontWeight: "700" }}>SHipping and delivery info</h1>
          <hr style={{ color: "#D9D9D9", width: "50%", margin: ".5rem 0 1rem" }} />
          <p style={{ fontSize: "14px", fontWeight: "500" }}>please provide your details</p>
        </div>

        <div style={{ margin: "2rem 0 3rem" }}>
          <div>
            <p style={{ textAlign: "right", textDecoration: "underline" }}>edit</p>
          </div>
          <div>
            <h2 style={{ textTransform: "uppercase", fontSize: "1rem", fontWeight: "700" }}>contact info</h2>
            <div style={{ margin: "2rem 0" }}>
              <section style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
                <label htmlFor="firstName" style={{ color: "#747577", fontSize: "1rem", fontWeight: "600" }}>First Name</label>
                <input type="text" placeholder="Jess" id="firstName" style={{ border: "1px solid #0000004D", padding: "1rem 2rem", backgroundColor: "transparent", fontSize: "1rem", fontWeight: "600", color: "#808285" }} />
              </section>
              <section style={{ display: "flex", flexDirection: "column", gap: ".8rem", margin: "1rem 0 0" }}>
                <label htmlFor="lastName" style={{ color: "#747577", fontSize: "1rem", fontWeight: "600" }}>Last Name</label>
                <input type="text" placeholder="Dalton" id="lastName" style={{ border: "1px solid #0000004D", padding: "1rem 2rem", backgroundColor: "transparent", fontSize: "1rem", fontWeight: "600", color: "#808285" }} />
              </section>
              <section style={{ display: "flex", flexDirection: "column", gap: ".8rem", margin: "1rem 0 0" }}>
                <label htmlFor="contactNumber" style={{ color: "#747577", fontSize: "1rem", fontWeight: "600" }}>Contact Number</label>
                <input type="text" placeholder="+4423567890" id="contactNumber" style={{ border: "1px solid #0000004D", padding: "1rem 2rem", backgroundColor: "transparent", fontSize: "1rem", fontWeight: "600", color: "#808285" }} />
              </section>
              <section style={{ display: "flex", flexDirection: "column", gap: ".8rem", margin: "1rem 0 0" }}>
                <label htmlFor="email" style={{ color: "#747577", fontSize: "1rem", fontWeight: "600" }}>Email Address</label>
                <input type="email" placeholder="Jessdalton@gmail.com" id="email" style={{ border: "1px solid #0000004D", padding: "1rem 2rem", backgroundColor: "transparent", fontSize: "1rem", fontWeight: "600", color: "#808285" }} />
              </section>
            </div>
          </div>
        </div>


        <div>
          <div>
            <p style={{ textAlign: "right", textDecoration: "underline" }}>edit</p>
          </div>
          <div>
            <h2 style={{ textTransform: "uppercase", fontSize: "1rem", fontWeight: "700" }}>Delivery Address</h2>
            <div style={{ margin: "2rem 0 0" }}>
              <section style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
                <label htmlFor="country" style={{ color: "#747577", fontSize: "1rem", fontWeight: "600" }}>Country</label>
                <input type="text" placeholder="United Kingdom" id="country" style={{ border: "1px solid #0000004D", padding: "1rem 2rem", backgroundColor: "transparent", fontSize: "1rem", fontWeight: "600", color: "#808285" }} />
              </section>
              <section style={{ display: "flex", flexDirection: "column", gap: ".8rem", margin: "1rem 0 0" }}>
                <label htmlFor="address" style={{ color: "#747577", fontSize: "1rem", fontWeight: "600" }}>Address</label>
                <input type="text" placeholder="345 Dalton Rd, Erith Kent, UK" id="address" style={{ border: "1px solid #0000004D", padding: "1rem 2rem", backgroundColor: "transparent", fontSize: "1rem", fontWeight: "600", color: "#808285" }} />
              </section>
            </div>
          </div>
        </div>

        <div>
          <button style={{ outline: "none", background: "#3f2d21", color: "#E8D2BA", border: "1px solid #3f2d21", borderRadius: "7px", padding: ".9rem 2rem", cursor: "pointer", fontSize: "14px", fontWeight: "500", margin: "4rem 0 0" }}>Saved</button>
        </div>

      </div>

      <div style={{ flex: "1", background: "#F2EBE3", padding: "2rem 1rem 8rem" }}>
        <div style={{ display: "flex", gap: "6rem" }}>
          <img src={backBtn} alt="" style={{}} />
          <h3>ORDER SUMMARY</h3>
        </div>

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

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          <div style={{ backgroundColor: "#ffffff4d", padding: "1.5rem", borderRadius: "13px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: ".5rem" }}>
                <div>
                  <img src={user} />
                </div>
                <div>
                  <p style={{ color: "#000000a3", fontSize: "1rem", fontWeight: "600", textTransform: "capitalize" }}>personal info</p>
                  <p style={{ color: "#808285", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", marginTop: ".3rem" }}>Jess, +4423567890</p>
                </div>
              </div>
              <div>
                <img src={edit} />
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#ffffff4d", padding: "1.5rem", borderRadius: "13px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: ".5rem" }}>
                <div>
                  <img src={locationIcon} />
                </div>
                <div>
                  <p style={{ color: "#000000a3", fontSize: "1rem", fontWeight: "600", textTransform: "capitalize" }}>Delivery</p>
                  <p style={{ color: "#808285", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", marginTop: ".3rem" }}>345 Dalton rd, Erith kent, UK</p>
                </div>
              </div>
              <div>
                <img src={edit} />
              </div>
            </div>
          </div>

        </div>

        <div style={{ margin: "1rem 0" }}>
          <hr style={{ color: "#E8D2BA", border: "1.3px solid #E8D2BA", width: "100%", margin: "0 auto" }} />

          <div style={{ margin: "1.5rem 0" }}>
            <input type="text" id="promoCode" placeholder="Promo Code" style={{ backgroundColor: "#FFFFFF4D", outline: "none", border: "none", color: "inherit", fontWeight: "600", fontSize: ".9rem", padding: "1rem 2rem", borderRadius: "10px", textAlign: "start", width: "70%" }} />
            <button style={{ outline: "none", background: "#3f2d21", color: "#E8D2BA", border: "1px solid #3f2d21", borderRadius: "7px", padding: ".9rem 2rem", cursor: "pointer", fontSize: "14px", fontWeight: "800" }}>Apply</button>
          </div>

          <hr style={{ color: "#E8D2BA", border: "1.3px solid #E8D2BA", width: "100%", margin: "0 auto" }} />

          <div>


            <div style={{ padding: "2rem .5rem 2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: "#808285", fontSize: ".95rem", fontWeight: "500" }}>Subtotal</p>
                <p style={{ color: "#1E1E1E", fontWeight: "800", fontSize: "18px" }}>$84</p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: ".5rem 0" }}>
                <p style={{ color: "#808285", fontSize: ".95rem", fontWeight: "500" }}>Delivery fee</p>
                <p style={{ color: "#C1694F", fontWeight: "800", fontSize: "18px" }}>$5</p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: "#000", fontSize: "1.1rem", fontWeight: "800" }}>Total</p>
                <p style={{ color: "#C1694F", fontWeight: "800", fontSize: "1.3rem" }}>$89</p>
              </div>
            </div>

          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <button style={{ width: "95%", outline: "none", background: "#3f2d21", color: "#E8D2BA", border: "1.39px solid #3f2d21", borderRadius: "7px", padding: "1rem 2rem", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}>Proceed to Payment</button>
          <button style={{ width: "95%", outline: "none", background: "#FFFFFF4D", color: "#FF0000", border: "none", padding: "1rem 2rem", cursor: "pointer", fontSize: "14px", fontWeight: "500", borderRadius: "10px" }}>Clear Order</button>
        </div>

      </div>

    </div>
  )
}

export default Checkout
