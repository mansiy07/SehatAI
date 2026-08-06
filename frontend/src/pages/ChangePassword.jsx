// ==========================================
// Change Password Page
// ==========================================

import "./../styles/ChangePassword.css";

import { useState } from "react";

import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSave
} from "react-icons/fa";

function ChangePassword() {

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (

    <div className="change-password-page">

      <div className="password-card">

        <h1>🔐 Change Password</h1>

        <p>Update your account password securely.</p>

        {/* Old Password */}

        <div className="password-field">

          <label>Current Password</label>

          <div className="password-input">

            <input
              type={showOld ? "text" : "password"}
              placeholder="Enter current password"
            />

            <button
              type="button"
              onClick={() => setShowOld(!showOld)}
            >
              {showOld ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

        </div>

        {/* New Password */}

        <div className="password-field">

          <label>New Password</label>

          <div className="password-input">

            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

        </div>

        {/* Confirm Password */}

        <div className="password-field">

          <label>Confirm Password</label>

          <div className="password-input">

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

        </div>

        <button className="save-password-btn">

          <FaSave />

          Update Password

        </button>

      </div>

    </div>

  );

}

export default ChangePassword;