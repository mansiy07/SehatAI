// ==========================================
// App Component
// ==========================================

import { Routes, Route } from "react-router-dom";

// Layout

import DashboardLayout from "./layouts/DashboardLayout";

// Pages

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AIAssistant from "./pages/AIAssistant";
import SymptomChecker from "./pages/SymptomChecker";
import Hospitals from "./pages/Hospitals";
import Learn from "./pages/Learn";
import HealthRecords from "./pages/HealthRecords";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Settings from "./pages/Settings";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./pages/NotFound";

// Global CSS

import "./App.css";

function App() {

  return (

    <Routes>

      {/* ==========================================
                PUBLIC PAGES
      ========================================== */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ==========================================
                DASHBOARD
      ========================================== */}

      <Route element={<DashboardLayout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/ai"
          element={<AIAssistant />}
        />

        <Route
          path="/symptom"
          element={<SymptomChecker />}
        />

        <Route
          path="/hospitals"
          element={<Hospitals />}
        />

        <Route
          path="/learn"
          element={<Learn />}
        />

        <Route
          path="/records"
          element={<HealthRecords />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/change-password"
          element={<ChangePassword />}
        />

      </Route>

      {/* ==========================================
                404 PAGE
      ========================================== */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  );

}

export default App;