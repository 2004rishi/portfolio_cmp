import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h1>
            <p className="hero-subtitle">
              We are a team of passionate developers, designers, and innovators 
              who create cutting-edge software solutions that drive business growth.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="code-block">
                <span className="code-line">const</span> <span className="code-variable">innovation</span> = <span className="code-string">'unlimited'</span>;
              </div>
              <div className="code-block">
                <span className="code-line">let</span> <span className="code-variable">future</span> = <span className="code-string">'bright'</span>;
              </div>
              <div className="code-block">
                <span className="code-line">function</span> <span className="code-function">buildDreams</span>() {'{'}
                <br />
                <span className="code-keyword">return</span> <span className="code-string">'success'</span>;
                <br />
                {'}'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose CodeIT?</h2>
          <p className="section-subtitle">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
          
          <div className="grid grid-3">
            <div className="feature-card card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>We deliver high-quality solutions on time, every time, ensuring your project stays on track.</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">💡</div>
              <h3>Innovation First</h3>
              <p>We stay ahead of the curve with the latest technologies and industry best practices.</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">🤝</div>
              <h3>Collaborative Approach</h3>
              <p>We work closely with you throughout the process, ensuring your vision becomes reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive software development solutions tailored to your needs
          </p>
          
          <div className="grid grid-2">
            <div className="service-preview card">
              <h3>Web Development</h3>
              <p>Modern, responsive websites and web applications built with cutting-edge technologies.</p>
              <Link to="/services" className="btn btn-secondary">Learn More</Link>
            </div>
            
            <div className="service-preview card">
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile applications for iOS and Android platforms.</p>
              <Link to="/services" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help bring your ideas to life</p>
            <Link to="/contact" className="btn">Get Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 