import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQs.css';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'What services does CodeIT offer?',
      answer: 'We offer comprehensive software development services including web development, mobile app development, cloud solutions, custom software development, consulting, and ongoing maintenance & support. Our team specializes in modern technologies like React, Node.js, React Native, and cloud platforms.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. Mobile apps typically take 2-4 months. We provide detailed timelines during the planning phase and keep you updated throughout the development process.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow a proven 6-phase process: Discovery & Analysis, Design & Planning, Development, Testing & QA, Deployment & Launch, and Maintenance & Support. We use Agile methodologies with regular client demos and feedback sessions to ensure your vision is realized.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance monitoring, 24/7 technical support, regular backups, and feature enhancements. We believe in building long-term partnerships with our clients.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, Docker, and more. We choose the best technology stack for each project based on requirements, scalability needs, and long-term maintenance considerations.'
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'We maintain high code quality through code reviews, automated testing, continuous integration, and following industry best practices. Our developers are experienced professionals who write clean, maintainable, and well-documented code. We also conduct thorough testing at multiple levels.'
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'Absolutely! We have extensive experience integrating with existing systems, APIs, and databases. We can work with legacy systems, third-party services, and help modernize your technology stack. We\'ll assess your current systems and recommend the best integration approach.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing options including fixed-price projects, time and materials, and ongoing support packages. Pricing depends on project complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs and always aim to deliver maximum value.'
    },
    {
      question: 'Do you provide training and documentation?',
      answer: 'Yes, we provide comprehensive training for your team, detailed technical documentation, user manuals, and API documentation. We ensure your team can effectively use and maintain the solution. We also offer ongoing training for new features and updates.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We maintain transparent communication through weekly progress reports, bi-weekly client demos, direct access to your development team, and real-time project tracking dashboards. We use tools like Slack, email, and video calls to ensure smooth communication throughout the project.'
    },
    {
      question: 'What if I need changes during development?',
      answer: 'We understand that requirements can evolve. Our Agile approach allows for changes and improvements throughout the development process. We\'ll assess the impact of changes on timeline and budget, and work with you to implement them efficiently while maintaining quality.'
    },
    {
      question: 'Do you provide hosting and deployment services?',
      answer: 'Yes, we can handle hosting setup, deployment, and ongoing infrastructure management. We work with major cloud providers like AWS, Azure, and Google Cloud, and can set up CI/CD pipelines for automated deployments. We also provide monitoring and maintenance for your infrastructure.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faqs">
      {/* Header */}
      <section className="faqs-header">
        <div className="container">
          <h1 className="faqs-title">Frequently Asked Questions</h1>
          <p className="faqs-subtitle">
            Find answers to common questions about our services and development process
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section">
        <div className="container">
          <div className="faqs-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`faq-answer ${openFAQ === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="section help-section">
        <div className="container">
          <h2 className="section-title">Still Have Questions?</h2>
          <p className="section-subtitle">
            Can't find what you're looking for? We're here to help!
          </p>
          
          <div className="help-options">
            <div className="help-option">
              <div className="help-icon">📧</div>
              <h3>Email Support</h3>
              <p>Send us an email and we'll get back to you within 24 hours.</p>
              <a href="mailto:hello@codeit.com" className="btn btn-secondary">
                Send Email
              </a>
            </div>
            
            <div className="help-option">
              <div className="help-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Chat with our support team during business hours for immediate assistance.</p>
              <button className="btn btn-secondary">
                Start Chat
              </button>
            </div>
            
            <div className="help-option">
              <div className="help-icon">📞</div>
              <h3>Phone Support</h3>
              <p>Call us directly for urgent matters or complex technical discussions.</p>
              <a href="tel:+15551234567" className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project requirements and answer any specific questions you have</p>
            <Link to="/contact" className="btn">Schedule Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs; 