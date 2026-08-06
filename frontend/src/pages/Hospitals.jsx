// ==========================================
// Hospitals Page
// ==========================================

import "./../styles/Hospitals.css";

import {
  FaHospital,
  FaSearch,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaDirections,
  FaAmbulance,
  FaClock
} from "react-icons/fa";

function Hospitals() {

  const hospitals = [

    {
      name: "Apollo Hospital",
      location: "Greater Noida",
      phone: "+91 9876543210",
      rating: "4.8",
      status: "Open 24x7",
    },

    {
      name: "Yatharth Hospital",
      location: "Noida Extension",
      phone: "+91 9123456789",
      rating: "4.6",
      status: "Open",
    },

    {
      name: "Fortis Hospital",
      location: "Noida Sector 62",
      phone: "+91 9988776655",
      rating: "4.7",
      status: "Open",
    },

    {
      name: "Kailash Hospital",
      location: "Greater Noida West",
      phone: "+91 9871234567",
      rating: "4.5",
      status: "Open",
    }

  ];

  return (

    <div className="hospital-page">

      <div className="hospital-header">

        <FaHospital className="hospital-icon"/>

        <h1>Nearby Hospitals</h1>

        <p>Find trusted hospitals near your location.</p>

      </div>

      {/* Search */}

      <div className="hospital-search">

        <input
          type="text"
          placeholder="Search city or hospital..."
        />

        <button>

          <FaSearch />

          Search

        </button>

      </div>

      {/* Emergency */}

      <div className="emergency-box">

        <FaAmbulance />

        <div>

          <h3>Emergency?</h3>

          <p>Call ambulance or visit the nearest hospital immediately.</p>

        </div>

      </div>

      {/* Cards */}

      <div className="hospital-grid">

        {

          hospitals.map((hospital,index)=>(

            <div
              className="hospital-card"
              key={index}
            >

              <div className="hospital-top">

                <FaHospital className="hospital-logo"/>

                <div>

                  <h2>{hospital.name}</h2>

                  <span className="rating">

                    <FaStar />

                    {hospital.rating}

                  </span>

                </div>

              </div>

              <p>

                <FaMapMarkerAlt />

                {hospital.location}

              </p>

              <p>

                <FaPhoneAlt />

                {hospital.phone}

              </p>

              <p>

                <FaClock />

                {hospital.status}

              </p>

              <div className="hospital-buttons">

                <button className="call-btn">

                  <FaPhoneAlt />

                  Call

                </button>

                <button className="direction-btn">

                  <FaDirections />

                  Directions

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Hospitals;