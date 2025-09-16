// src/pages/Catalog.jsx
import React from 'react';
import '../styles/Catalog.css'; // Import the stylesheet

// Import your images
import webDevImage from '../assets/images/web.JPG';
import dataScienceImage from '../assets/images/data.JPG';
import machineLearningImage from '../assets/images/machine.JPG';
import cloudComputingImage from '../assets/images/cloud.JPG';
import uiUxDesignImage from '../assets/images/ui.JPG';
import writingImage from '../assets/images/writing.jpg';
import photographyImage from '../assets/images/photo.jpg';
import musicProductionImage from '../assets/images/music.jpg';
import marketingImage from '../assets/images/marketing.jpg';
import financeImage from '../assets/images/finance.jpg';
import managementImage from '../assets/images/management.jpg';
import communicationImage from '../assets/images/communication.jpg';

// Simple static doodle components - clean and minimal like the reference
const ComputerDoodle = ({ style }) => (
  <svg style={style} width="50" height="40" viewBox="0 0 50 40" fill="none">
    <rect x="8" y="8" width="30" height="20" rx="2" stroke="#A5A2F3" strokeWidth="2" fill="none"/>
    <rect x="6" y="28" width="34" height="2" rx="1" stroke="#A5A2F3" strokeWidth="2" fill="none"/>
    <rect x="20" y="30" width="8" height="4" rx="1" stroke="#A5A2F3" strokeWidth="2" fill="none"/>
  </svg>
);

const ArrowDoodle = ({ style }) => (
  <svg style={style} width="40" height="30" viewBox="0 0 40 30" fill="none">
    <path d="M5 15L30 15M25 10L30 15L25 20" stroke="#F0F3A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CircleDoodle = ({ style }) => (
  <svg style={style} width="35" height="35" viewBox="0 0 35 35" fill="none">
    <circle cx="17.5" cy="17.5" r="15" stroke="#A5A2F3" strokeWidth="2" fill="none"/>
  </svg>
);

const LineDoodle = ({ style }) => (
  <svg style={style} width="50" height="20" viewBox="0 0 50 20" fill="none">
    <path d="M5 10C15 5 25 15 35 10C40 8 45 12 45 10" stroke="#F0F3A2" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const SquareDoodle = ({ style }) => (
  <svg style={style} width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect x="5" y="5" width="20" height="20" rx="3" stroke="#A5A2F3" strokeWidth="2" fill="none"/>
  </svg>
);

const PlusDoodle = ({ style }) => (
  <svg style={style} width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M12.5 5V20M5 12.5H20" stroke="#F0F3A2" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const skillsData = [
  {
    id: 'tech-cat',
    category: 'Technology & Digital Skills',
    description: 'Build the future with cutting-edge development and data skills.',
    subcategories: [
      { id: 'web-dev', name: 'Web Development', image: webDevImage },
      { id: 'data-science', name: 'Data Science', image: dataScienceImage },
      { id: 'mobile-dev', name: 'Machine Learning', image: machineLearningImage },
      { id: 'cloud-computing', name: 'Cloud Computing', image: cloudComputingImage },
  
    ]
  },
  {
    id: 'creative-cat',
    category: 'Creative Arts & Media',
    description: 'Bring ideas to life through design, writing, and multimedia.',
    subcategories: [
      { id: 'design', name: 'UI/UX & Graphic Design', image: uiUxDesignImage },
      { id: 'writing', name: 'Writing', image: writingImage },
      { id: 'photo-video', name: 'Photo & Videography', image: photographyImage },
      { id: 'music-prod', name: 'Music Production', image: musicProductionImage }
    ]
  },
  {
    id: 'business-cat',
    category: 'Business & Professional',
    description: 'Lead, market, and manage in the modern business landscape.',
    subcategories: [
      { id: 'marketing', name: 'Marketing', image: marketingImage },
      { id: 'finance', name: 'Finance & Accounting', image: financeImage },
      { id: 'management', name: 'Management', image: managementImage },
      { id: 'communication', name: 'Communication', image: communicationImage }
    ]
  }
];

const Catalog = () => {
  // Static doodle positions - no animation
  const doodles = [
    { id: 1, Component: ArrowDoodle, x: 15, y: 15, rotation: 25 },
    { id: 2, Component: CircleDoodle, x: 85, y: 20, rotation: 0 },
    { id: 3, Component: LineDoodle, x: 10, y: 45, rotation: -15 },
    { id: 4, Component: ComputerDoodle, x: 90, y: 50, rotation: 10 },
    { id: 5, Component: SquareDoodle, x: 5, y: 75, rotation: 20 },
    { id: 6, Component: PlusDoodle, x: 95, y: 80, rotation: 0 },
    { id: 7, Component: ArrowDoodle, x: 12, y: 30, rotation: -45 },
    { id: 8, Component: LineDoodle, x: 88, y: 35, rotation: 30 },
    { id: 9, Component: CircleDoodle, x: 8, y: 60, rotation: 0 },
    { id: 10, Component: SquareDoodle, x: 92, y: 65, rotation: -25 }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'rgba(238, 238, 205, 1)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '20px',
        position: 'relative',
        zIndex: 2
      }} className="catalog-container">
        
        {/* Static decorative doodles */}
        {doodles.map(doodle => {
          const DoodleComponent = doodle.Component;
          return (
            <DoodleComponent
              key={doodle.id}
              style={{
                position: 'absolute',
                left: `${doodle.x}%`,
                top: `${doodle.y}%`,
                transform: `rotate(${doodle.rotation}deg)`,
                zIndex: 1,
                opacity: 0.3,
                pointerEvents: 'none'
              }}
            />
          );
        })}

        <div style={{ position: 'relative', zIndex: 3 }}>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '50px',
            color: '#333',
            fontWeight: 700,
            fontSize: '2.8rem',
            letterSpacing: '-1px'
          }}>
            Catalog
          </h1>

          {skillsData.map(categoryItem => (
            <div key={categoryItem.id} style={{ marginBottom: '60px' }}>
              <div style={{
                borderLeft: '4px solid #A5A2F3',
                paddingLeft: '20px',
                marginBottom: '30px'
              }}>
                <h2 style={{ 
                  margin: 0, 
                  color: '#333', 
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  {categoryItem.category}
                </h2>
                <p style={{ 
                  margin: 0, 
                  color: '#666', 
                  fontSize: '1.1rem',
                  lineHeight: '1.5'
                }}>
                  {categoryItem.description}
                </p>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '25px',
                justifyContent: 'center'
              }}>
                {categoryItem.subcategories.map(sub => (
                  <div 
                    key={sub.id}
                    style={{
                      border: '2px solid #000',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      textAlign: 'left',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'translateY(0px)'
                    }}
                    onMouseEnter={(e) => {
                      const card = e.currentTarget;
                      card.style.transform = 'translateY(-8px)';
                      card.style.boxShadow = '0 12px 30px rgba(165, 162, 243, 0.3)';
                      const textArea = card.querySelector('.text-area');
                      if (textArea) textArea.style.backgroundColor = '#A5A2F3';
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget;
                      card.style.transform = 'translateY(0px)';
                      card.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)';
                      const textArea = card.querySelector('.text-area');
                      if (textArea) textArea.style.backgroundColor = '#000';
                    }}
                  >
                    <div style={{ backgroundColor: '#f8f8f1' }}>
                      <img 
                        src={sub.image} 
                        alt={sub.name}
                        style={{
                          width: '100%',
                          height: '160px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>
                    <div 
                      className="text-area"
                      style={{
                        padding: '20px',
                        backgroundColor: '#000',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <h3 style={{
                        margin: 0,
                        fontSize: '1.15rem',
                        color: '#fff',
                        fontWeight: 600
                      }}>
                        {sub.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;