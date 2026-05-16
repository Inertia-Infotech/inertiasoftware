import React, { useState } from 'react';
import '../styles/CertificateVerification.css';
import demoCertificate from '../assets/certificate-demo.png';

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      setVerificationResult({
        candidateName: 'John Doe',
        internshipDate: 'January 15, 2024',
        certificateAssignedDate: 'March 20, 2024',
        joinDate: 'January 15, 2024',
        endDate: 'March 15, 2024',
        authorizingOrganisation: 'Inertia Infotech',
        companyId: 'II-2024-001',
        verificationStatus: 'Verified'
      });
      setIsVerifying(false);
    }, 1500);
  };

  const handleScanQR = () => {
    setShowScanner(!showScanner);
  };

  const handleReset = () => {
    setCertificateId('');
    setVerificationResult(null);
    setShowScanner(false);
  };

  return (
    <div className="certificate-verification-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">Career</span>
            <h1 className="page-hero-title">Certificate Verification</h1>
            <p className="page-hero-subtitle">
              Verify the authenticity of internship and training certificates issued by Inertia Infotech. Enter your certificate ID or scan the QR code for instant verification.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="verification-section">
        <div className="container">
          <div className="verification-container">
            {/* Left: Certificate Preview Card */}
            <div className="certificate-preview-card">

              <img src={demoCertificate} alt="Certificate" />
              {/* <div className="certificate-header">
                <div className="certificate-logo">
                  <i className="fa fa-certificate"></i>
                </div>
                <div className="certificate-title">
                  <h3>Certificate of Completion</h3>
                  <p>Internship Program</p>
                </div>
              </div>
              <div className="certificate-body">
                <div className="certificate-field">
                  <span className="field-label">Certificate ID:</span>
                  <span className="field-value">II-2024-001</span>
                </div>
                <div className="certificate-field">
                  <span className="field-label">Candidate:</span>
                  <span className="field-value">John Doe</span>
                </div>
                <div className="certificate-field">
                  <span className="field-label">Program:</span>
                  <span className="field-value">Web Development Internship</span>
                </div>
                <div className="certificate-field">
                  <span className="field-label">Duration:</span>
                  <span className="field-value">Jan 15, 2024 - Mar 15, 2024</span>
                </div>
              </div>
              <div className="certificate-footer">
                <div className="certificate-stamp">
                  <i className="fa fa-check-circle"></i>
                  <span>Verified</span>
                </div>
              </div> */}
            </div>

            {/* Right: Verification Form */}
            <div className="verification-form-card">
              <div className="form-header">
                <h2>Verify Certificate</h2>
                <p>Enter the Certificate ID to verify authenticity</p>
              </div>

              <form onSubmit={handleVerify} className="verification-form">
                <div className="form-group">
                  <label htmlFor="certificateId">Certificate ID</label>
                  <div className="input-wrapper">
                    <i className="fa fa-id-card input-icon"></i>
                    <input
                      type="text"
                      id="certificateId"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      placeholder="Enter Certificate ID (e.g., II-2024-001)"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn-primary verify-btn"
                    disabled={isVerifying || !certificateId.trim()}
                  >
                    {isVerifying ? (
                      <>
                        <i className="fa fa-spinner fa-spin"></i>
                        Verifying...
                      </>
                    ) : (
                      <>
                        <i className="fa fa-shield-halved"></i>
                        Verify Certificate
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="btn-outline scan-btn"
                    onClick={handleScanQR}
                  >
                    <i className="fa fa-camera"></i>
                    {showScanner ? 'Close Scanner' : 'Scan QR Code'}
                  </button>
                </div>

                {showScanner && (
                  <div className="qr-scanner">
                    <div className="scanner-container">
                      <div className="scanner-frame">
                        <i className="fa fa-qrcode scanner-icon"></i>
                        <p>Position QR code within the frame</p>
                      </div>
                      <div className="scanner-line"></div>
                    </div>
                  </div>
                )}
              </form>

              {verificationResult && (
                <div className="verification-result animate-fadeInUp">
                  <div className="result-header">
                    <div className="result-icon result-icon--success">
                      <i className="fa fa-check-circle"></i>
                    </div>
                    <h3>Certificate Verified</h3>
                    <p>This certificate is authentic and valid.</p>
                  </div>

                  <div className="result-details">
                    <div className="result-row">
                      <span className="result-label">Candidate Name:</span>
                      <span className="result-value">{verificationResult.candidateName}</span>
                    </div>
                    <div className="result-row">
                      <span className="result-label">Internship Date:</span>
                      <span className="result-value">{verificationResult.internshipDate}</span>
                    </div>
                    <div className="result-row">
                      <span className="result-label">Certificate Assigned Date:</span>
                      <span className="result-value">{verificationResult.certificateAssignedDate}</span>
                    </div>
                    <div className="result-row">
                      <span className="result-label">Join Date:</span>
                      <span className="result-value">{verificationResult.joinDate}</span>
                    </div>
                    <div className="result-row">
                      <span className="result-label">End Date:</span>
                      <span className="result-value">{verificationResult.endDate}</span>
                    </div>
                    <div className="result-row">
                      <span className="result-label">Authorizing Organisation:</span>
                      <span className="result-value">{verificationResult.authorizingOrganisation}</span>
                    </div>
                    <div className="result-row">
                      <span className="result-label">Company ID:</span>
                      <span className="result-value">{verificationResult.companyId}</span>
                    </div>
                    <div className="result-row result-row--status">
                      <span className="result-label">Verification Status:</span>
                      <span className="result-value result-value--verified">
                        <i className="fa fa-check-circle"></i>
                        {verificationResult.verificationStatus}
                      </span>
                    </div>
                  </div>

                  <button className="btn-primary reset-btn" onClick={handleReset}>
                    <i className="fa fa-redo"></i>
                    Verify Another Certificate
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateVerification;
