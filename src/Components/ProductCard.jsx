import likeIcon from "/src/assets/likeIcon.svg";

const ProductCard = ({productImg, productName, productPrice }) => {
    return (
        <div style={{maxWidth: "365px", width: "100%", position: "relative"}}>
            <img src={productImg} alt="" style={{width: "100%"}} />
            <div style={{position: "absolute", right: "0", top: "0", margin: "1rem 1rem 0 0"}}>
                <img src={likeIcon} alt="" style={{background: "#fff", padding: "7px", borderRadius: "50%", cursor: "pointer"}} />
            </div>
            <div style={{padding: "1rem 0 0 .5rem"}}>
                <h2 style={{ fontWeight: "800", fontSize: "18px" }}>{productName}</h2>
                <p style={{ color: "#c1694f", fontWeight: "800", fontSize: "20px", margin: ".5rem 0" }}>${productPrice}</p>
            </div>
        </div>
    )
}

export default ProductCard