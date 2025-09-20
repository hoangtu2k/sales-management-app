import '@styles/admin.css'

import { AuthProvider } from "@contexts/AuthContext";
import { RequireAuthAdmin } from "@contexts/RequireAuth";

import AdminLayout from "@layouts/AdminLayout";
import HomeLayout from "@layouts/HomeLayout";

import Login from "@pages/admin/Login";
import Dashboard from "@pages/admin/Dashboard";
import ProductManage from "@pages/admin/products/ProductManage";
import Orders from "@pages/admin/orders/Orders";
import CreateOrder from "@pages/admin/orders/CreateOrder";

import Home from "@pages/client/Home";
import Cart from "@pages/client/Cart";
import ProductList from "@pages/client/ProductList"; 
import ProductDetail from "@pages/client/ProductDetail"; 



import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Login riêng, không cần RequireAuth */}
          <Route path="/admin/login" element={<Login />} />

          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products/list" element={<ProductManage />} />
            <Route path="/admin/orders/list" element={<Orders />} />
            <Route path="/admin/orders/create" element={<CreateOrder />} />
          </Route>

          {/* Nhóm route admin yêu cầu đăng nhập */}
          <Route element={<RequireAuthAdmin />}>

          </Route>

          {/* Customer routes */}
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/account/login" element={<LoginCustomer />} />
            <Route path="/account/register" element={<Register />} /> */}

            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
  


          </Route>




          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
