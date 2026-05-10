import React from 'react';
import ContactSection from '../components/ContactSection';
import '../styles/ServicesPage.css';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">Reach Out</span>
            <h1 className="page-hero-title">Contact Us</h1>
            <p className="page-hero-subtitle">
              Have a question or ready to start your project? We're here to help — reach out via any channel below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="contact-page-body">
        <ContactSection />
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const faqs = [
  {
    q: 'How long does a typical web development project take?',
    a: 'Project timelines vary based on complexity. A standard website takes 3–6 weeks, while complex web applications or ERP systems can take 3–6 months. We provide a detailed timeline after the discovery phase.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Absolutely. We offer ongoing support packages that cover bug fixes, performance monitoring, security updates, and feature enhancements. We\'re with you for the long term.',
  },
  {
    q: 'What is your development process?',
    a: 'We follow an agile methodology with regular sprint reviews. After an initial discovery phase, we move through design, development, testing, and deployment — with your feedback integrated at every stage.',
  },
  {
    q: 'Can you work with our existing tech stack?',
    a: 'Yes. Our team is experienced across a wide range of technologies. We can integrate with, extend, or migrate from most existing systems and stacks.',
  },
  {
    q: 'How do you handle project pricing?',
    a: 'We offer both fixed-price and time-and-material models depending on project scope. After our initial consultation, we provide a detailed, transparent quote with no hidden charges.',
  },
  {
    q: 'Do you sign NDAs and confidentiality agreements?',
    a: 'Yes, absolutely. We take client confidentiality seriously and are happy to sign NDAs before any project discussions take place.',
  },
];

const FAQItem = ({ faq }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <i className={`fa ${open ? 'fa-minus' : 'fa-plus'}`}></i>
      </button>
      <div className="faq-answer">
        <p>{faq.a}</p>
      </div>
    </div>
  );
};

export default Contact;
