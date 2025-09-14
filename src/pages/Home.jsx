import React, { useEffect } from "react";
import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    const yellowCircle = document.getElementById('yellowCircle');
    const blueCircle = document.getElementById('blueCircle');
    let isSwapped = false;

    function updateSwap() {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      const shouldSwap = scrollPercentage > 25;

      if (shouldSwap !== isSwapped) {
        isSwapped = shouldSwap;
        
        if (isSwapped) {
          yellowCircle.style.transform = 'translateY(-50%) translateX(180px)';
          blueCircle.style.transform = 'translateY(-50%) translateX(-180px)';
        } else {
          yellowCircle.style.transform = 'translateY(-50%) translateX(0px)';
          blueCircle.style.transform = 'translateY(-50%) translateX(0px)';
        }
      }
    }

    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(updateSwap);
        ticking = true;
        setTimeout(() => { ticking = false; }, 10);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
       {/* 🔹 Navbar */}
              
       {/* 🔹 Hero Section */}
      <section className="hero">
        <h1>
          Learn <span className="highlight">Anywhere.</span><br />
          <span className="highlight">Teach</span> Everywhere.
        </h1>
        <p>
          Share what you know. Gain what you seek.
        </p>
        <div className="email-box">
          <input type="email" placeholder="Enter your email" />
          <button>Send</button>
        </div>

        {/* Circle Swap Component */}
        <div className="circles-container" id="circlesContainer">
          <div className="circle circle-yellow" id="yellowCircle">🎸</div>
          <div className="circle circle-blue" id="blueCircle">&lt;/&gt;</div>
        </div>

        {/* Floating tags */}
      </section>

       {/* 🔹 Presenting Section */}
      <section className="presenting">
        <div className="cards">
          <div className="card blue">
            <img src="https://i.pinimg.com/1200x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg" alt="comfortable room" />
            <p>Create your profile</p>
          </div>
          <div className="card yellow">
            <img src="https://i.pinimg.com/1200x/3a/4e/a7/3a4ea7bd3facc5d09632a058a26e9b59.jpg" alt="online education" />
            <p>Find a match</p>
          </div>
          <div className="card green">
            <img src="https://i.pinimg.com/736x/dc/71/2c/dc712c782791382a736cd0b34ab0b31f.jpg" alt="strong team" />
            <p>Strong team</p>
          </div>
        </div>

        <div className="text">
          <h2>
            <span className="highlight-text">Presenting</span> ourselves
          </h2>
          <p>
            Our current project, SkillSwap Market, is a web platform that enables people to exchange skills instead of money—making learning more accessible, fun, and community-driven. We aim to combine technical learning with social impact, while sharpening our skills in full-stack development, database design, and project collaboration.
          </p>
        </div>
      </section>

      {/* 🔹 Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="subscribe-section">
              <button className="subscribe-btn">Join Us</button>
              <span className="subscribe-text">and grow</span>
            </div>
            <div className="footer-email-box">
              <input type="email" placeholder="Enter your email" />
              <button className="send-btn">Send</button>
            </div>
          </div>
          
          <div className="footer-right">
            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#programmes">How it works</a>
              <a href="#resources">Resources</a>
              <a href="#academy">Community Stories</a>
             
            </nav>
            
            <div className="footer-bottom">
              <div className="social-links">
               
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.566-1.35 2.14-2.21z"/>
                  </svg>
                </a>
              </div>
              <a href="#privacy" className="privacy-link">Privacy policy</a>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        
      </footer>

    </div>
  );
};

export default Home;