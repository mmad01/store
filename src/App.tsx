import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BuyProduct from "./pages/BuyProduct";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/buyproducts" element={<BuyProduct />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
