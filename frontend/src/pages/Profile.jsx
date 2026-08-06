// ==========================================
// Profile
// ==========================================

import "./../styles/Profile.css";

import { FaUserCircle } from "react-icons/fa";

function Profile() {

  return (

    <div className="profile-page">

      <div className="profile-card">

        <FaUserCircle className="profile-icon" />

        <h1>Mansi Yadav</h1>

        <p>AI Healthcare User</p>

        <div className="profile-info">

          <div>

            <span>Email</span>

            <h3>mansiyadav2807@gmail.com</h3>

          </div>

          <div>

            <span>Phone</span>

            <h3>+91 9876543210</h3>

          </div>

          <div>

            <span>Location</span>

            <h3>Greater Noida</h3>

          </div>

          <div>

            <span>Member Since</span>

            <h3>August 2026</h3>

          </div>

        </div>

        <button>

          Edit Profile

        </button>

      </div>

    </div>

  );

}

export default Profile;