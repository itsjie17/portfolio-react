import React from 'react';
import './App.css';

function Skills() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="logo">My Skills</h1>
        </div>
      </header>

      <section className="section skills animate-in">
        <div className="container">
          <div className="skills-content">
            <div className="skills-category">
              <h3>Frontend Development</h3>
              <div className="skills-grid">
                <div className="skill-name">React</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{width: '30%'}}></div>
                </div>
                <div className="skill-name">JavaScript</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{width: '45%'}}></div>
                </div>
                <div className="skill-name">HTML/CSS</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Backend Development</h3>
              <div className="skills-grid">
                <div className="skill-name">Node.js</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{width: '20%'}}></div>
                </div>
                <div className="skill-name">Express.js</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{width: '25%'}}></div>
                </div>
                <div className="skill-name">MongoDB</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{width: '10%'}}></div>
                </div>
              </div>
            </div>

            <div className='skills-category'>
                <h3>Networking Skills</h3>
                <div className="skills-grid">
                 <div className="skill-name">Linux</div>
                  <div className='skill-level'>
                    <div className='skill-bar' style={{width: '80%'}}></div>
                  </div>
                  <div className="skill-name">TCP/IP</div>
                  <div className='skill-level'>
                    <div className='skill-bar' style={{width: '30%'}}></div>
                  </div>
                  <div className="skill-name">DNS Management</div>
                  <div className='skill-level'>
                    <div className='skill-bar' style={{width: '30%'}}></div>
                  </div>
                  <div className="skill-name">VPN Configuration</div>
                  <div className='skill-level'>
                    <div className='skill-bar' style={{width: '30%'}}></div>
                  </div>
                  <div className="skill-name">Firewall Setup</div>
                  <div className='skill-level'>
                    <div className='skill-bar' style={{width: '40%'}}></div>
                  </div>
                  <div className="skill-name">Network Troubleshooting</div>
                  <div className='skill-level'>
                    <div className='skill-bar' style={{width: '70%'}}></div>
                  </div>
                  <div className="skill-name">Wi-Fi Technologies</div>
                  <div className='skill-level'>
                    <div className='skill-bar' style={{width: '50%'}}></div>
                  </div>
                </div>
            </div>

            <div className="skills-category">
              <h3>Tools & Technologies</h3>
              <div className="skills-grid">
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  <span>Git</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                  <span>GitHub</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                  <span>VS Code</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
                  <span>Linux</span>
                </div>
                <div className="skill">
                  <img src="/images/logo autocad.png" alt="AutoCAD" />
                  <span>AutoCAD</span>
                </div>
                <div className="skill">
                  <img src="/images/logo CPT.png" alt="Cisco Packet Tracer" />
                  <span>Cisco Packet Tracer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
