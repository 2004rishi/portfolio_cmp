import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'soumojit dutta',
      role: 'CEO & Founder',
      bio: 'Former Google engineer with 150+ years of experience in software development and team leadership.',
      expertise: ['Strategic Planning', 'Team Leadership', 'Product Vision'],
      avatar: '👩‍💼'
    },
    {
      name: 'rishi',
      role: 'Co Founder',
      bio: 'Former Google engineer with 150+ years of experience in software development and team leadership.',
      expertise: ['Strategic Planning', 'Team Leadership', 'Product Vision'],
      avatar: '👩‍💼'
    },
    {
      name: 'Ujjwal Singh',
      role: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems with experience at Amazon and Microsoft.',
      expertise: ['Cloud Architecture', 'System Design', 'DevOps'],
      avatar: '👨‍💻'
    },
    {
      name: 'Adham Kamal',
      role: 'Lead Designer',
      bio: 'Award-winning UX/UI designer passionate about creating intuitive and beautiful user experiences.',
      expertise: ['User Experience', 'Visual Design', 'Prototyping'],
      avatar: '👩‍🎨'
    },
    {
      name: 'Rishab Upadhyay',
      role: 'Senior Developer',
      bio: 'Full-stack developer specializing in React, Node.js, and modern web technologies.',
      expertise: ['Frontend Development', 'Backend Development', 'API Design'],
      avatar: '👨‍🔧'
    },
    {
      name: 'Deepjyoti Dutta',
      role: 'Creative Head',
      bio: 'Award-winning UX/UI designer passionate about creating intuitive and beautiful user experiences.',
      expertise: ['User Experience', 'Visual Design', 'Prototyping'],
      avatar: '👩‍🎨'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client communication.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to ensure their vision becomes reality.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and industry best practices.'
    },
    {
      icon: '🚀',
      title: 'Results',
      description: 'We focus on delivering measurable results that drive business growth and success.'
    }
  ];

  return (
    <div className="about">
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <h1 className="about-title">About CodeIT</h1>
          <p className="about-subtitle">
            We are a team of passionate developers, designers, and innovators dedicated to transforming ideas into powerful digital solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-vision">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
            </div>
            
            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                To be the leading software development partner for businesses worldwide, 
                known for delivering exceptional quality, innovation, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These principles guide everything we do and shape our company culture
          </p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Experienced professionals passionate about delivering exceptional results
          </p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member card">
                <div className="member-avatar">{member.avatar}</div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                
                <div className="member-expertise">
                  <h4>Expertise:</h4>
                  <div className="expertise-tags">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              CodeIT was founded in 2019 by a group of experienced developers who shared a common vision: 
              to create software solutions that not only meet technical requirements but also drive real business value.
            </p>
            <p>
              What started as a small team of three has grown into a dynamic company of passionate professionals, 
              each bringing unique expertise and perspectives to every project. We've had the privilege of working 
              with clients across various industries, from startups to Fortune 500 companies.
            </p>
            <p>
              Our journey has been marked by continuous learning, innovation, and an unwavering commitment to 
              client success. We believe that great software is built through collaboration, creativity, and 
              a deep understanding of both technology and business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>Let's discuss how we can help bring your ideas to life</p>
            <Link to="/contact" className="btn">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 