import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import AddToCart from "./pages/AddCart";
import NotFound from "./Components/NotFound";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/addtocart" element={<AddToCart/>} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
