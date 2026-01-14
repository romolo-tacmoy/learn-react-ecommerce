import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage product={product} />} />
      <Route path="checkout" element={<CheckoutPage product={product} />} />
      <Route path="orders" element={<OrdersPage />}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes>
  );
}

export default App;
