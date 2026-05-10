import React, { useState } from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Web Development',
    'App Development',
    'IT Consultancy',
    'ERP Development',
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Inertia Infotech!%0A%0AI'd like to enquire about your services.%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Mobile:* ${form.mobile}%0A*Service:* ${form.service}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/919270166932?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear about it. Send us your details and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Details</h3>

            <div className="contact-info-items">
              <a href="tel:+919270166932" className="contact-info-item">
                <div className="contact-info-icon" style={{ '--ci-color': '#0d6efd' }}>
                  <i className="fa fa-phone"></i>
                </div>
                <div>
                  <span className="contact-info-label">Call Us</span>
                  <span className="contact-info-value">+91 92701 66932</span>
                </div>
              </a>

              <a href="mailto:inertiainfotech@gmail.com" className="contact-info-item">
                <div className="contact-info-icon" style={{ '--ci-color': '#7c3aed' }}>
                  <i className="fa fa-envelope"></i>
                </div>
                <div>
                  <span className="contact-info-label">Email Us</span>
                  <span className="contact-info-value">inertiainfotech@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/919270166932?text=Hello%20Inertia%20Infotech!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <div className="contact-info-icon" style={{ '--ci-color': '#25d366' }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <span className="contact-info-label">WhatsApp</span>
                  <span className="contact-info-value">Chat With Us Now</span>
                </div>
              </a>
            </div>

            <div className="contact-social-section">
              <span className="contact-social-label">Follow Us</span>
              <div className="contact-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" style={{ '--social-color': '#e1306c' }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" style={{ '--social-color': '#0077b5' }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" style={{ '--social-color': '#1da1f2' }}>
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>

            <div className="contact-image-card">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&q=80"
                alt="Our office"
                className="contact-card-image"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">Send an Enquiry</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Required *</label>
                  <select
                    name="service"
                    className="form-input form-select"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className={`btn-primary contact-submit-btn ${submitted ? 'contact-submit-btn--success' : ''}`}
              >
                {submitted ? (
                  <>
                    <i className="fa fa-check"></i>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <i className="fab fa-whatsapp"></i>
                    Send Enquiry via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
