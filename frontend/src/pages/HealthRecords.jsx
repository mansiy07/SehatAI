// ==========================================
// Health Records
// ==========================================

import "./../styles/HealthRecords.css";

import {
  FaFileMedical,
  FaUpload,
  FaDownload
} from "react-icons/fa";

function HealthRecords() {

  return (

    <div className="records-page">

      <div className="records-card">

        <FaFileMedical className="records-icon"/>

        <h1>Health Records</h1>

        <p>

          Upload and manage your medical reports securely.

        </p>

        <div className="upload-box">

          <FaUpload />

          <p>Upload Report (PDF / Image)</p>

          <button>

            Choose File

          </button>

        </div>

        <div className="record-item">

          <div>

            <h3>Blood Test Report</h3>

            <span>Uploaded : 04 Aug 2026</span>

          </div>

          <button>

            <FaDownload />

            Download

          </button>

        </div>

        <div className="record-item">

          <div>

            <h3>X-Ray Report</h3>

            <span>Uploaded : 15 Jul 2026</span>

          </div>

          <button>

            <FaDownload />

            Download

          </button>

        </div>

      </div>

    </div>

  );

}

export default HealthRecords;