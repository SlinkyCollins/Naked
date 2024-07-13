import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import AddToCart from "./pages/AddCart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/addtocart" element={<AddToCart/>} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
