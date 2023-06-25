import Template from "./template/Template";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ProductDetail from "./pages/products/detail/ProductDetail";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import AdminLogin from "./pages/adminAuth/AdminAuthLogin";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import ProductList from "./pages/products/ProductList";

function App() {
  return (
    <Template>
      <Router>
        <Routes>
          <Route path="/products" exact element={<ProductList />} />
          <Route path="/shopping-cart" exact element={<ShoppingCart />} />
          <Route path="/auth-user" exact element={<Login />} />
          <Route path="/admin/auth-user" exact element={<AdminLogin />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" exact element={<Landing />} />
        </Routes>
      </Router>
    </Template>
  )
}

export default App;
