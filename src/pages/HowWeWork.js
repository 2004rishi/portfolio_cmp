import React from 'react';
import { Link } from 'react-router-dom';
import './HowWeWork.css';

const HowWeWork = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Analysis',
      duration: '1-2 weeks',
      description: 'We start by understanding your business goals, requirements, and technical constraints.',
      activities: [
        'Requirements gathering and analysis',
        'Stakeholder interviews',
        'Technical feasibility assessment',
        'Project scope definition',
        'Timeline and budget planning'
      ],
      deliverables: [
        'Detailed project requirements document',
        'Technical architecture proposal',
        'Project timeline and milestones',
        'Cost estimate and payment schedule'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Design & Planning',
      duration: '2-3 weeks',
      description: 'Our design team creates wireframes, prototypes, and detailed technical specifications.',
      activities: [
        'User experience (UX) design',
        'User interface (UI) design',
        'Technical architecture design',
        'Database schema design',
        'API design and documentation'
      ],
      deliverables: [
        'Wireframes and mockups',
        'Interactive prototypes',
        'Technical specification document',
        'Database schema documentation',
        'API documentation'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Development',
      duration: '4-12 weeks',
      description: 'Our development team builds your solution using modern technologies and best practices.',
      activities: [
        'Frontend development',
        'Backend development',
        'Database implementation',
        'API development',
        'Third-party integrations',
        'Code reviews and quality checks'
      ],
      deliverables: [
        'Functional application',
        'Source code',
        'Technical documentation',
        'User manual',
        'API documentation'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Testing & Quality Assurance',
      duration: '2-3 weeks',
      description: 'Comprehensive testing ensures your solution is bug-free and performs optimally.',
      activities: [
        'Unit testing',
        'Integration testing',
        'User acceptance testing',
        'Performance testing',
        'Security testing',
        'Cross-browser testing'
      ],
      deliverables: [
        'Test reports',
        'Bug fixes and improvements',
        'Performance optimization',
        'Security audit report'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Deployment & Launch',
      duration: '1-2 weeks',
      description: 'We deploy your solution and provide training and support for your team.',
      activities: [
        'Environment setup',
        'Application deployment',
        'Data migration',
        'User training',
        'Go-live support',
        'Performance monitoring'
      ],
      deliverables: [
        'Production-ready application',
        'Deployment documentation',
        'Training materials',
        'Support documentation'
      ]
    },
    {
      phase: 'Phase 6',
      title: 'Maintenance & Support',
      duration: 'Ongoing',
      description: 'We provide ongoing maintenance, updates, and technical support.',
      activities: [
        'Bug fixes and updates',
        'Performance monitoring',
        'Security updates',
        'Feature enhancements',
        '24/7 technical support',
        'Regular backups'
      ],
      deliverables: [
        'Maintenance reports',
        'Update logs',
        'Performance reports',
        'Support tickets resolution'
      ]
    }
  ];

  const methodologies = [
    {
      name: 'Agile Development',
      description: 'We follow Agile methodologies with 2-week sprints, daily standups, and regular client demos.',
      benefits: ['Flexible and adaptive', 'Regular client feedback', 'Faster time to market', 'Continuous improvement']
    },
    {
      name: 'DevOps Practices',
      description: 'We implement CI/CD pipelines, automated testing, and infrastructure as code for reliable deployments.',
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Automated quality checks']
    },
    {
      name: 'Quality Assurance',
      description: 'Comprehensive testing at every stage ensures high-quality, bug-free software.',
      benefits: ['Early bug detection', 'Better user experience', 'Reduced maintenance costs', 'Higher reliability']
    }
  ];

  return (
    <div className="how-we-work">
      {/* Header */}
      <section className="how-we-work-header">
        <div className="container">
          <h1 className="how-we-work-title">How We Work</h1>
          <p className="how-we-work-subtitle">
            Our proven development methodology ensures successful project delivery and long-term success
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle">
            We follow a structured approach that ensures transparency, quality, and timely delivery
          </p>
          
          <div className="phases-timeline">
            {phases.map((phase, index) => (
              <div key={index} className="phase-card card">
                <div className="phase-header">
                  <div className="phase-number">{phase.phase}</div>
                  <div className="phase-info">
                    <h3>{phase.title}</h3>
                    <span className="phase-duration">{phase.duration}</span>
                  </div>
                </div>
                
                <p className="phase-description">{phase.description}</p>
                
                <div className="phase-details">
                  <div className="activities">
                    <h4>Key Activities:</h4>
                    <ul>
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="deliverables">
                    <h4>Deliverables:</h4>
                    <ul>
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="section methodologies-section">
        <div className="container">
          <h2 className="section-title">Our Methodologies</h2>
          <p className="section-subtitle">
            We use industry best practices and modern development methodologies
          </p>
          
          <div className="methodologies-grid">
            {methodologies.map((methodology, index) => (
              <div key={index} className="methodology-card card">
                <h3>{methodology.name}</h3>
                <p>{methodology.description}</p>
                
                <div className="benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="section communication-section">
        <div className="container">
          <h2 className="section-title">Communication & Collaboration</h2>
          <p className="section-subtitle">
            We believe in transparent communication and close collaboration throughout the project
          </p>
          
          <div className="communication-grid">
            <div className="communication-item">
              <div className="communication-icon">📅</div>
              <h3>Regular Updates</h3>
              <p>Weekly progress reports and bi-weekly client demos to keep you informed.</p>
            </div>
            
            <div className="communication-item">
              <div className="communication-icon">💬</div>
              <h3>Direct Communication</h3>
              <p>Direct access to your development team through Slack, email, or video calls.</p>
            </div>
            
            <div className="communication-item">
              <div className="communication-icon">📊</div>
              <h3>Project Dashboard</h3>
              <p>Real-time project tracking and milestone monitoring through our project management tools.</p>
            </div>
            
            <div className="communication-item">
              <div className="communication-icon">🤝</div>
              <h3>Client Collaboration</h3>
              <p>Active involvement in key decisions and regular feedback sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your requirements and create a customized development plan</p>
            <Link to="/contact" className="btn">Schedule Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork; 