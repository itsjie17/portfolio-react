import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import FlappyBird from './flappybird';
import ProfileCard from './ProfileCard'; // React Bits ProfileCard
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

function About() {
  const [showIntro, setShowIntro] = useState(true);
  const [aboutRef, isAboutVisible, hasAboutIntersected] = useIntersectionObserver();
  const [skillsRef, isSkillsVisible, hasSkillsIntersected] = useIntersectionObserver();

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const programmingItems = [
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logohtml.png"} alt="HTML" className="skill-logo" />, label: 'HTML', color: 'orange' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logocss.png"} alt="CSS" className="skill-logo" />, label: 'CSS', color: 'blue' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logojavascript.png"} alt="JavaScript" className="skill-logo" />, label: 'JavaScript', color: 'orange' }
  ];

  const aplikasiItems = [
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logophotoshop.png"} alt="Photoshop" className="skill-logo" />, label: 'Photoshop', color: 'purple' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logovscode.png"} alt="VSCode" className="skill-logo" />, label: 'VSCode', color: 'blue' },
    { icon: <img src= {process.env.PUBLIC_URL + "/images/logo CPT.png"} alt="Cisco Packet Tracer" className="skill-logo" />, label: 'Cisco Packet Tracer', color: 'green' }
  ];

  return (
    <div className="page">
      <ParticleBackground />
      {showIntro && (
        <div className="intro-animation">
          <div className="intro-text">
            <span className="hi">
              <TypingAnimation text="Hi," speed={150} />
            </span>
            <span className="name">
              <TypingAnimation text="I'm Ajie Ahmad Fathi Fauzi" speed={80} delay={800} />
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
                behindGlowEnabled={true} // ✅ BENAR
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize='50%'
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                enableTilt={true}
                enableMobileTilt={false}
                mobileTiltSensitivity={5}
                showUserInfo={true} // Pastikan ini true
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
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const handleAboutClick = () => setShowIntro(true);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          {showIntro && (
            <div className="intro-animation">
              <div className="intro-text">
                <span className="hi">Hi,</span>
                <span className="name">I'm Ajie Ahmad Fathi Fauzi</span>
              </div>
            </div>
          )}
          {!showIntro && <Sidebar onAboutClick={handleAboutClick} />}

          <div className="main-content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/game" element={<FlappyBird autoStart={true} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
