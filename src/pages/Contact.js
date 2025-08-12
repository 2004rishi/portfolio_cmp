import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Ready to start your project? Let's discuss how we can help bring your ideas to life
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we\'ll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-submit">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Get in touch with us through any of these channels:</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Office Address</h3>
                    <p>123 Tech Street<br />San Francisco, CA 94105<br />United States</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:hello@codeit.com">hello@codeit.com</a></p>
                    <p><a href="mailto:support@codeit.com">support@codeit.com</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h3>Live Chat</h3>
                    <p>Available during business hours</p>
                    <button className="btn btn-secondary">Start Chat</button>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📷</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Schedule a free consultation call to discuss your requirements in detail</p>
            <button className="btn">Schedule Free Call</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 