import "../styles/Register.css";

function Register() {

  return (

    <div className="register-container">

      <div className="register-card">

        <h1>Create Account 🎉</h1>

        <p>Join <span>SehatAI</span> today</p>

        <form>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="login-link">

          Already have an account?

          <a href="/login"> Login</a>

        </p>

      </div>

    </div>

  );

}

export default Register;