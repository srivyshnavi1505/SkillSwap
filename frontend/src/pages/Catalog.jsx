// src/pages/Catalog.jsx

import React from 'react';
import '../styles/Catalog.css'; // Import the stylesheet

// The data for the first three categories
const skillsData = [
  {
    id: 'tech-cat',
    category: 'Technology & Digital Skills',
    description: 'Build the future with cutting-edge development and data skills.',
    subcategories: [
      { id: 'web-dev', name: 'Web Development', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Web' },
      { id: 'data-science', name: 'Data Science',  image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Data' },
      { id: 'mobile-dev', name: 'Machine Learning', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Mobile' },
      { id: 'cloud-computing', name: 'Cloud Computing', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Cloud' },
      { id: 'cybersecurity', name: 'Cybersecurity', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Security' }
    ]
  },
  {
    id: 'creative-cat',
    category: 'Creative Arts & Media',
    description: 'Bring ideas to life through design, writing, and multimedia.',
    subcategories: [
      { id: 'design', name: 'UI/UX & Graphic Design',  image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Design' },
      { id: 'writing', name: 'Writing', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Writing' },
      { id: 'photo-video', name: 'Photo & Videography',  image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Photo' },
      { id: 'music-prod', name: 'Music Production', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Music' }
    ]
  },
  {
    id: 'business-cat',
    category: 'Business & Professional',
    description: 'Lead, market, and manage in the modern business landscape.',
    subcategories: [
      { id: 'marketing', name: 'Marketing', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Marketing' },
      { id: 'finance', name: 'Finance & Accounting', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Finance' },
      { id: 'management', name: 'Management', image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Mgmt' },
      { id: 'communication', name: 'Communication',image: 'https://via.placeholder.com/150/F0F3A2/000000?text=Comm' },
    ]
  }
];

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h1>Catalog</h1> {/* Changed title to match image */}

      {/* Outer loop for each main category */}
      {skillsData.map(categoryItem => (
        <div key={categoryItem.id} className="skill-category">
          {/* We'll simplify the category header to just a subtitle like "Technology & Digital Skills" if needed */}
          {/* For now, let's focus on the cards, like "Project Management" */}
          {/* The image doesn't show a clear main category title above the cards */}
          {/* You might want to remove the category-header or style it differently if you want to mimic the image exactly */}
          {/* For now, I'll keep the category header for structure, but you can comment it out if you prefer */}
          <div className="category-header" > {/* Temporarily hide for visual resemblance */}
            <h2>{categoryItem.category}</h2>
            <p>{categoryItem.description}</p>
          </div>
          
          <div className="subcategory-grid">
            {/* Inner loop for subcategories */}
            {categoryItem.subcategories.map(sub => (
              <div key={sub.id} className="subcategory-card">
                <img src={sub.image} alt={sub.name} className="subcategory-image" /> {/* Added image */}
                <div className="card-content">
                  <h3>{sub.name}</h3>
                  {/* You could add a lesson count here if your data had it, e.g. <span className="lesson-count">32 lessons</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
