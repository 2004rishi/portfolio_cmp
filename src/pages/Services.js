import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration', 'Performance Optimization', 'SEO Optimization'],
      price: ''
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment', 'Push Notifications', 'Offline Support'],
      price: ''
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions for modern applications.',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Logging', 'Security & Compliance', 'Cost Optimization'],
      price: ''
    },
    {
      icon: '🔧',
      title: 'Custom Software',
      description: 'Tailored software solutions designed to solve your specific business challenges.',
      features: ['Requirements Analysis', 'Custom Architecture', 'Integration Services', 'Testing & QA', 'Documentation', 'Training & Support'],
      price: ''
    },
    {
      icon: '💼',
      title: 'Consulting',
      description: 'Expert guidance on technology strategy, architecture, and digital transformation.',
      features: ['Technology Assessment', 'Architecture Review', 'Team Training', 'Code Review', 'Performance Audit', 'Security Assessment'],
      price: ''
    },
    {
      icon: '🚀',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your applications.',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support', 'Regular Backups', 'Version Updates'],
      price: ''
    }
  ];

  return (
    <div className="services">
      {/* Header */}
      <section className="services-header">
        <div className="container">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive software development solutions designed to accelerate your business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-price">{service.price}</div>
                
                <Link to="/contact" className="btn">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle">
            We follow a proven methodology to ensure successful project delivery
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>We analyze your requirements and create a detailed project plan with timelines and milestones.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Our designers create wireframes and prototypes to visualize the user experience and interface.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>Our development team builds your solution using modern technologies and best practices.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing & QA</h3>
              <p>Rigorous testing ensures your solution is bug-free and performs optimally.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Deployment & Launch</h3>
              <p>We deploy your solution and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project requirements and find the perfect solution for your business</p>
            <Link to="/contact" className="btn">Schedule Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 