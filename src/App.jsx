import '@styles/admin.css'

import { AuthProvider } from "@contexts/AuthContext";
import { RequireAuthAdmin } from "@contexts/RequireAuth";

import AdminLayout from "@layouts/AdminLayout";

import Login from "@pages/admin/Login";
import Dashboard from "@pages/admin/Dashboard";
import ProductManage from "@pages/admin/ProductManage";

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
            <Route path="/admin/products" element={<ProductManage />} />
          </Route>

          {/* Nhóm route admin yêu cầu đăng nhập */}
          <Route element={<RequireAuthAdmin />}>

          </Route>

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
