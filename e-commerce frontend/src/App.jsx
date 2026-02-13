import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/admin/Loader"; // Optional: Use your Loader component

// 1. Main Pages
const Home = lazy(() => import("./pages/Home.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const Search = lazy(() => import("./pages/Search.jsx"));

// 2. Admin Dashboard Main Pages
const Dashboard = lazy(() => import("./pages/admin/Dashboard.jsx"));
const Products = lazy(() => import("./pages/admin/Products.jsx"));
const Customers = lazy(() => import("./pages/admin/Customers.jsx"));
const Transaction = lazy(() => import("./pages/admin/Transaction.jsx"));

// 3. Admin Charts (Inside /charts folder)
const Barcharts = lazy(() => import("./pages/admin/charts/BarCharts.jsx"));
const Piecharts = lazy(() => import("./pages/admin/charts/PieCharts.jsx"));
const Linecharts = lazy(() => import("./pages/admin/charts/LineCharts.jsx"));

// 4. Admin Apps (Inside /apps folder)
const Coupon = lazy(() => import("./pages/admin/apps/Coupon.jsx"));
const Stopwatch = lazy(() => import("./pages/admin/apps/Stopwatch.jsx"));
const Toss = lazy(() => import("./pages/admin/apps/Toss.jsx"));

// 5. Admin Management (Inside /management folder)
const NewProduct = lazy(() => import("./pages/admin/management/NewProduct.jsx"));
const ProductManagement = lazy(() => import("./pages/admin/management/ProductManagement.jsx"));
const TransactionManagement = lazy(() => import("./pages/admin/management/TransactionManagement.jsx"));

function App() {
  return (
    <Router>
      {/* Use a Loader component for the fallback if you have one */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />

          {/* Admin Routes - Dashboard */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Admin Routes - Charts */}
          <Route path="/admin/chart/bar" element={<Barcharts />} />
          <Route path="/admin/chart/pie" element={<Piecharts />} />
          <Route path="/admin/chart/line" element={<Linecharts />} />

          {/* Admin Routes - Apps */}
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* Admin Routes - Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;