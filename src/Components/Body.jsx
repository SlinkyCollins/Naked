import "./Body.css";
import ProductCard from "./ProductCard";
import frame1 from "/src/assets/Frame 262.png";
import frame2 from "/src/assets/Frame 263.png";
import frame3 from "/src/assets/Frame 264.png";
import frame4 from "/src/assets/Frame 265.png";
import frame5 from "/src/assets/Frame 258.png";
import frame6 from "/src/assets/Frame 259.png";
import frame7 from "/src/assets/Frame 260.png";
import frame8 from "/src/assets/Frame 261.png";
import frame9 from "/src/assets/Frame 254.png";
import frame10 from "/src/assets/Frame 255.png";
import frame11 from "/src/assets/Frame 256.png";
import frame12 from "/src/assets/Frame 257.png";
import { useNavigate } from "react-router-dom";


const products = [
  { img: frame1, name: "Contour Bodysuit", price: 105 },
  { img: frame2, name: "Thin Fit Bodysuit", price: 75 },
  { img: frame3, name: "Plunge Bodysuit", price: 135 },
  { img: frame4, name: "Lace Bodysuit", price: 105 },
  { img: frame5, name: "Slim Girl Bodysuit", price: 84 },
  { img: frame6, name: "Open Top Bodysuit", price: 125 },
  { img: frame7, name: "Cross Bodysuit", price: 156 },
  { img: frame8, name: "U-Plunge Bodysuit", price: 145 },
  { img: frame9, name: "Cross T Bodysuit", price: 165 },
  { img: frame10, name: "Firm Bust Bodysuit", price: 95 },
  { img: frame11, name: "Silky Bodysuit", price: 120 },
  { img: frame12, name: "Open Cut Bodysuit", price: 150 }
];

const Body = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    console.log("Product clicked:", product); // Debugging log
    navigate("/addtocart", { state: { product, products  } });
  };

  return (
    <>
      <div className="body-container">
        <div className="text-overlay">
          <h1>Luxury shapewear</h1>
          <p>comfortable fitted underwears</p>
        </div>
      </div>

      <div className="body-content">
        <div className="button-group">
          <button className="category-button">Bodysuits</button>
          <button className="category-button">Lingerie</button>
          <button className="category-button">Plunge bras</button>
          <button className="category-button">Gym sets</button>
          <button className="category-button">Pants</button>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productImg={product.img}
              productName={product.name}
              productPrice={product.price}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default Body;
