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

const Body = () => {
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
          <ProductCard productImg={frame1} productName="Contour Bodysuit" productPrice={105} />
          <ProductCard productImg={frame2} productName="Thin Fit Bodysuit" productPrice={75} />
          <ProductCard productImg={frame3} productName="Plunge Bodysuit" productPrice={135} />
          <ProductCard productImg={frame4} productName="Lace Bodysuit" productPrice={105} />
          <ProductCard productImg={frame5} productName="Slim girl bodysuit" productPrice={84} />
          <ProductCard productImg={frame6} productName="Open Top Bodysuit" productPrice={125} />
          <ProductCard productImg={frame7} productName="Cross Bodysuit" productPrice={156} />
          <ProductCard productImg={frame8} productName="U-Plunge Bodysuit" productPrice={156} />
          <ProductCard productImg={frame9} productName="Cross T Bodysuit" productPrice={145} />
          <ProductCard productImg={frame10} productName="Firm Bust Bodysuit" productPrice={165} />
          <ProductCard productImg={frame11} productName="Silky Bodysuit" productPrice={95} />
          <ProductCard productImg={frame12} productName="Open Cut Bodysuit" productPrice={120} />
        </div>
      </div>
    </>
  );
};

export default Body;
