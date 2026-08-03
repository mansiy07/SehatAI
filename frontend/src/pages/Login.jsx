// ==========================================
// Login Page
// ==========================================

import "./../styles/Login.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="login-page">

      {/* Background */}

      <div className="login-overlay">

        {/* Login Card */}

        <div className="login-card">

          {/* Heading */}

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue using
            <span> SehatAI</span>
          </p>

          {/* Login Form */}

          <form>

            {/* Email */}

            <div className="input-box">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

            {/* Password */}

            <div className="input-box">

              <label>Password</label>

              <div className="password-box">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="show-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? "Hide" : "Show"}

                </button>

              </div>

            </div>

            {/* Remember */}

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="#">
                Forgot Password?
              </a>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="login-btn"
            >

              Login

            </button>

          </form>

          {/* Register */}

          <div className="register-link">

            Don't have an account?

            <Link to="/register">

              Register

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;