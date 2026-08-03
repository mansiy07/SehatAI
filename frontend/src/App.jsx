// ==========================================
// App Component
// Purpose:
// Manage all application routes
// ==========================================

// Import React Router
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Global CSS
import "./App.css";

function App() {
  return (

    <Routes>

      {/* ==========================
              Home Page
      ========================== */}

      <Route
        path="/"
        element={<Home />}
      />

      {/* ==========================
              Login Page
      ========================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* ==========================
            Register Page
      ========================== */}

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ==========================
            Dashboard Page
      ========================== */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* ==========================
            404 Page
      ========================== */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  );
}

export default App;