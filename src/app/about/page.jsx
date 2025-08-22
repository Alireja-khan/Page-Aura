"use client";
import React from 'react';
import Head from 'next/head';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Nova Khan',
      role: 'CEO & Founder',
      bio: '10+ years of industry experience with a passion for innovative solutions.',
      image: '/Images/CEO.png'
    },
    {
      id: 2,
      name: 'Alireja Khan',
      role: 'Lead Designer',
      bio: 'Creative visionary with expertise in UI/UX and product design.',
      image: '/Images/Designer.png'
    },
    {
      id: 3,
      name: 'Onanto Ghosh',
      role: 'CTO',
      bio: 'Technology expert specializing in scalable architecture and development.',
      image: '/Images/CTO.png'
    },
    {
      id: 4,
      name: 'Apurba Ghosh',
      role: 'Marketing Director',
      bio: 'Digital marketing strategist with a focus on brand growth.',
      image: '/Images/Marketing Director.png'
    }
  ];

  const stats = [
    { number: '2015', label: 'Founded' },
    { number: '250+', label: 'Employees' },
    { number: '15M', label: 'Users' },
    { number: '10+', label: 'Countries' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'Excellence is our standard in everything we create.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe great things happen when people work together.',
      icon: '🤝'
    },
    {
      title: 'Sustainability',
      description: 'We build for the future with responsible practices.',
      icon: '🌱'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Company Name</title>
        <meta name="description" content="Learn about our company, mission, team, and values" />
      </Head>

      <div className="about-page">
        {/* Hero Section
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">We're changing the way people connect</h1>
            <p className="hero-subtitle">
              Our mission is to create technology that empowers individuals and businesses to achieve more.
            </p>
            <button className="cta-button">Learn More</button>
          </div>
        </section> */}

        {/* Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Story</h2>
              <p>How it all began and where we're headed</p>
            </div>
            <div className="story-content">
              <div className="story-text">
                <p>
                  Founded in 2015, our company started as a small team with a big vision: to simplify complex
                  problems through elegant technology solutions. What began as a passion project in a garage
                  has grown into an international organization serving millions of users worldwide.
                </p>
                <p>
                  Today, we continue to innovate and expand our offerings while staying true to our core
                  values of quality, innovation, and customer satisfaction. Our journey is just beginning,
                  and we're excited about the future we're building together.
                </p>
              </div>
              <div className="story-image">
                <img className='h-150 object-cover' src="/Images/Office.jpg" alt="Our office" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Team</h2>
              <p className="text-gray-600">Meet the talented people behind our success</p>
            </div>

            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map(member => (
                <div
                  key={member.id}
                  className="team-card flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6"
                >
                  <div className="team-image w-32 h-32 mb-4">
                    <img
                      className="w-full h-full rounded-full object-cover object-top border-2 border-gray-200"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="role text-indigo-600 font-medium">{member.role}</p>
                  <p className="bio text-gray-600 text-sm mt-2 flex-grow">
                    {member.bio}
                  </p>
                  <div className="social-links flex space-x-4 mt-4">
                    <a href="#" aria-label={`${member.name} Twitter`} className="text-blue-400 hover:scale-110 transition">🐦</a>
                    <a href="#" aria-label={`${member.name} LinkedIn`} className="text-blue-700 hover:scale-110 transition">💼</a>
                    <a href="#" aria-label={`${member.name} Email`} className="text-gray-500 hover:scale-110 transition">✉️</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Join us on our journey</h2>
            <p>We're always looking for talented individuals to join our growing team.</p>
            <div className="cta-buttons">
              <button className="primary-button">View Open Positions</button>
              <button className="secondary-button">Contact Us</button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
        }
        
        .hero-title {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          max-width: 700px;
          margin: 0 auto 40px;
          opacity: 0.9;
        }
        
        .cta-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 15px 30px;
          font-size: 1.1rem;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        /* Section Common Styles */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #333;
        }
        
        .section-header p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Story Section */
        .story-section {
          padding: 100px 0;
          background: #fff;
        }
        
        .story-content {
          display: flex;
          align-items: center;
          gap: 50px;
        }
        
        .story-text {
          flex: 1;
          font-size: 1.1rem;
        }
        
        .story-text p {
          margin-bottom: 20px;
        }
        
        .story-image {
          flex: 1;
        }
        
        .story-image img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        /* Stats Section */
        .stats-section {
          background: #f8f9fa;
          padding: 80px 0;
        }
        
        .stats-section .container {
          display: flex;
          justify-content: space-around;
          text-align: center;
        }
        
        .stat-item h3 {
          font-size: 3rem;
          color: #667eea;
          margin-bottom: 10px;
        }
        
        .stat-item p {
          font-size: 1.1rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* Values Section */
        .values-section {
          padding: 100px 0;
          background: #fff;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .value-card {
          text-align: center;
          padding: 30px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .value-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #333;
        }
        
        .value-card p {
          color: #666;
        }
        
        /* Team Section */
        .team-section {
          padding: 100px 0;
          background: #f8f9fa;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .team-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
          padding: 30px 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .team-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 20px;
        }
        
        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .team-card h3 {
          margin-bottom: 5px;
          font-size: 1.5rem;
        }
        
        .role {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .bio {
          color: #666;
          margin-bottom: 20px;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        
        .social-links a {
          color: #333;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }
        
        .social-links a:hover {
          color: #667eea;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        
        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        
        .cta-section p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 40px;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        
        .primary-button, .secondary-button {
          padding: 15px 30px;
          font-size: 1.1rem;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .primary-button {
          background: white;
          color: #667eea;
          border: none;
        }
        
        .secondary-button {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .primary-button:hover, .secondary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .story-content {
            flex-direction: column;
          }
          
          .stats-section .container {
            flex-wrap: wrap;
          }
          
          .stat-item {
            flex: 0 0 50%;
            margin-bottom: 30px;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .stat-item {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;