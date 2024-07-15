import tick from "/src/assets/Tick.svg";
import close from "/src/assets/close.png";
import image from "/src/assets/Rectangle 81.png";
import "./ItemAddedModal.css";

const ItemAddedModal = () => {
    return (
        <div className="modal-overlay">
            <div style={{ backgroundColor: "#fff", padding: "2rem 3rem 2rem", width: "100%", maxWidth: "35rem", margin: "10rem auto", borderRadius: "13px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", color: "#808285" }}>
                        <img src={tick} alt="" />
                        <p>item added to your cart</p>
                    </div>

                    <div>
                        <img src={close} alt="" style={{cursor: "pointer"}} />
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1.5rem", margin: "2rem 0" }}>

                    <div>
                        <img src={image} alt="" />
                    </div>

                    <div style={{ width: "100%" }}>
                        <h2 style={{ textTransform: "capitalize", fontSize: "1.2rem", fontWeight: "600" }}>slim girl bodysuit</h2>

                        <div style={{ textTransform: "uppercase", margin: "1rem 0" }}>
                            <p style={{ color: "#808285", fontSize: "0.85rem", fontWeight: "600" }}>colour : <span style={{ color: "#000" }}>brown</span></p>
                            <p style={{ color: "#808285", fontSize: "0.85rem", fontWeight: "600", margin: ".5rem 0" }}>size: <span style={{ color: "#000" }}>XS</span></p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 0 1rem" }}>
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

                            <div>
                                <p style={{ color: "#c1694f", fontWeight: "800", fontSize: "1rem" }}>$84</p>
                            </div>
                        </div>

                        <div style={{ textTransform: "uppercase" }}>
                            <p style={{ color: "#808285", fontSize: "0.85rem", fontWeight: "600" }}>quantity: <span style={{ color: "#000" }}>1</span></p>
                        </div>
                    </div>

                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <button style={{ width: "100%", outline: "none", background: "transparent", color: "#3f2d21", border: "1.39px solid #3f2d21", borderRadius: "7px", padding: "1rem 2rem", cursor: "pointer", fontSize: "1rem", fontWeight: "600" }}>View cart (1)</button>
                    <button style={{ width: "100%", outline: "none", background: "#3f2d21", color: "#fff", border: "1.39px solid #3f2d21", borderRadius: "7px", padding: "1rem 2rem", cursor: "pointer", fontSize: "1rem", fontWeight: "600" }}>Check out</button>
                </div>
            </div>
        </div>
    )
}

export default ItemAddedModal
