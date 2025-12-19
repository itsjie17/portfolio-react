import React, { useState, useEffect, useContext, useRef } from 'react';
import './App.css';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import FlappyBird from './flappybird';
import ProfileCard from './ProfileCard';
import './ProfileCard.css';
import { ThemeContext } from './ThemeContext';
import GlassIcons from './GlassIcons';
import ParticleBackground from './components/ParticleBackground';
import TypingAnimation from './components/TypingAnimation';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useIntersectionObserver from './hooks/useIntersectionObserver';

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function About({ restartIntro = false, onIntroComplete }) {
  const [showIntro, setShowIntro] = useState(true);
  const [aboutRef, , hasAboutIntersected] = useIntersectionObserver();
  const [skillsRef, , hasSkillsIntersected] = useIntersectionObserver();
  const [hiComplete, setHiComplete] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const introRef = useRef(null);

  // Reset intro saat restartIntro berubah menjadi true
  useEffect(() => {
    if (restartIntro && !isAnimating) {
      console.log("Starting intro animation");
      setIsAnimating(true);
      setShowIntro(true);
      setHiComplete(false);
      setNameComplete(false);
      
      // Reset CSS animation
      if (introRef.current) {
        const element = introRef.current;
        element.style.animation = 'none';
        // Trigger reflow dengan cara yang valid
        // eslint-disable-next-line
        void element.offsetHeight;
        element.style.animation = 'fadeOut 3s ease-in-out 5s forwards';
      }
    }
  }, [restartIntro, isAnimating]);

  // Handle completion of typing animations
  useEffect(() => {
    if (hiComplete && nameComplete && isAnimating) {
      console.log("Both typing animations complete");
      // Setelah typing selesai, tunggu 2 detik lalu fade out
      const timer = setTimeout(() => {
        console.log("Fading out intro");
        setShowIntro(false);
        setIsAnimating(false);
        if (onIntroComplete) {
          onIntroComplete();
        }
      }, 2000); // 2 detik delay sebelum fade out
      
      return () => clearTimeout(timer);
    }
  }, [hiComplete, nameComplete, isAnimating, onIntroComplete]);

  // Auto-hide intro setelah 8 detik (untuk keamanan)
  useEffect(() => {
    if (showIntro && isAnimating) {
      const safetyTimer = setTimeout(() => {
        console.log("Safety timer: Hiding intro");
        setShowIntro(false);
        setIsAnimating(false);
        if (onIntroComplete) {
          onIntroComplete();
        }
      }, 8000); // Max 8 detik total
  
      return () => clearTimeout(safetyTimer);
    }
  }, [showIntro, isAnimating, onIntroComplete]);

  const programmingItems = [
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logohtml.png"} alt="HTML" className="skill-logo" />, label: 'HTML', color: 'orange' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logocss.png"} alt="CSS" className="skill-logo" />, label: 'CSS', color: 'blue' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logojavascript.png"} alt="JavaScript" className="skill-logo" />, label: 'JavaScript', color: 'orange' }
  ];

  const aplikasiItems = [
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logophotoshop.png"} alt="Photoshop" className="skill-logo" />, label: 'Photoshop', color: 'purple' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logovscode.png"} alt="VSCode" className="skill-logo" />, label: 'VSCode', color: 'blue' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logo-CPT.png"} alt="Cisco Packet Tracer" className="skill-logo" />, label: 'Cisco Packet Tracer', color: 'green' }
  ];

  return (
    <div className="page">
      <ParticleBackground />
      {showIntro && (
        <div 
          className="intro-animation" 
          ref={introRef}
        >
          <div className="intro-text">
            <span className="hi">
              <TypingAnimation 
                key={`hi-${restartIntro}-${isAnimating}`}
                text="Hi," 
                speed={150} 
                onComplete={() => {
                  console.log("Hi animation complete");
                  setHiComplete(true);
                }}
                shouldStart={isAnimating}
              />
            </span>
            <span className="name">
              <TypingAnimation 
                key={`name-${restartIntro}-${isAnimating}`}
                text="I'm Ajie Ahmad Fathi Fauzi" 
                speed={80} 
                delay={800} 
                onComplete={() => {
                  console.log("Name animation complete");
                  setNameComplete(true);
                }}
                shouldStart={isAnimating}
              />
            </span>
          </div>
        </div>
      )}

      <section
        id="about"
        className={`section about ${hasAboutIntersected ? 'animate-in' : ''}`}
        ref={aboutRef}
      >
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className='profile-card-container'>
               <ProfileCard
                avatarUrl= {process.env.PUBLIC_URL + "/profile.jpg"}
                miniAvatarUrl={process.env.PUBLIC_URL + "/profile.jpg"}
                grainUrl={process.env.PUBLIC_URL + '/grain.png'}
                iconUrl={process.env.PUBLIC_URL + '/holo-mask.svg'}
                name="Ajie Ahmad Fathi Fauzi"
                title="Fresh Graduate"
                handle="its_jie17"
                contactText="Contact"
                behindGlowEnabled={true}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize='50%'
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                enableTilt={true}
                enableMobileTilt={false}
                mobileTiltSensitivity={5}
                showUserInfo={true}
                onContactClick={() => window.open('https://www.instagram.com/its_jie17/', '_blank')}
              />
            </div>

            <div className="about-text">
              <p>Selamat datang di dunia saya! Saya adalah mahasiswa Telkom University yang akan lulus D3 Teknologi Telekomunikasi pada tahun 2025. Dengan semangat yang membara untuk inovasi teknologi, saya berkomitmen untuk membangun jaringan yang menghubungkan dunia.</p>
              <p>Dari troubleshooting jaringan hingga eksplorasi teknologi masa depan, saya siap menghadapi tantangan dan berkontribusi pada kemajuan digital. Mari kita kolaborasi dan ciptakan masa depan yang lebih terhubung!</p>
            </div>

            <div className="skills-section" ref={skillsRef}>
              <h3>Bahasa Pemrograman</h3>
              <GlassIcons items={programmingItems} />
              <h3>Aplikasi</h3>
              <GlassIcons items={aplikasiItems} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <h1 className='logo'>About Me</h1>
      </div>
    </header>
  );
}

function Sidebar({ onAboutClick }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-profile">
          <div className="profile-image-sidebar">
            <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile" className="placeholder-image-sidebar" />
          </div>
          <div className="profile-name-sidebar">
            Ajie Ahmad Fathi Fauzi
          </div>
        </div>
        <div className="theme-toggle-container-sidebar">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <Link to="/" className="nav-button" onClick={onAboutClick}>
          <span className="nav-icon">👤</span>
          <span>About</span>
        </Link>
        <Link to="/projects" className="nav-button">
          <span className="nav-icon">💼</span>
          <span>Projects</span>
        </Link>
        <Link to="/skills" className="nav-button">
          <span className="nav-icon">🛠️</span>
          <span>Skills</span>
        </Link>
        <Link to="/contact" className="nav-button">
          <span className="nav-icon">📧</span>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [restartIntro, setRestartIntro] = useState(false);
  const [sidebarHidden, setSidebarHidden] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setIntroDone(true), 300);
    return () => clearTimeout(startTimer);
  }, []);

  const handleAboutClick = () => {
    console.log("About button clicked");
    
    // Sembunyikan sidebar dengan animasi cepat
    setSidebarHidden(true);
    setTimeout(() => {
      setSidebarVisible(false);
      setSidebarHidden(false);
    }, 300); // Animasi sidebar keluar dalam 300ms
    
    // Trigger restart intro
    setRestartIntro(true);
    
    // Reset restartIntro setelah delay singkat
    setTimeout(() => {
      setRestartIntro(false);
    }, 100);
    
    // Tampilkan kembali sidebar setelah animasi intro selesai
    // Timing yang benar: 5 detik (sesuai CSS animation)
    setTimeout(() => {
      setSidebarVisible(true);
      console.log("Sidebar visible again");
    }, 500); // 5 detik - sesuai dengan animasi CSS
  };

  const handleIntroComplete = () => {
    console.log("Intro animation completed - showing sidebar");
    setSidebarVisible(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          {introDone && (
            <>
              <Header />
              <div className={`sidebar-wrapper ${sidebarHidden ? 'fade-out' : ''}`}>
                {sidebarVisible && <Sidebar onAboutClick={handleAboutClick} />}
              </div>
              <div className="main-content">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <About 
                        restartIntro={restartIntro} 
                        onIntroComplete={handleIntroComplete}
                      />
                    } 
                  />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/game" element={<FlappyBird autoStart={true} />} />
                </Routes>
              </div>
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;