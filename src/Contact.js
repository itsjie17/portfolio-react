import React from 'react';
import './App.css';

function Contact() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="logo">Contact Me</h1>
        </div>
      </header>

      <section className="section contact animate-in">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Feel free to reach out for collaborations or opportunities!</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>ajieaff@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+62821 2965 1124</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Cirebon, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-grid">
                <a href="https://linkedin.com/in/ajieahmadfathifauzi" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ajieahmadfathifauzi" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="https://twitter.com/ajieahmadfathifauzi" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="https://instagram.com/its_jie17" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📷</span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
