import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Projects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Click This",
      description: "Classic Flappy Bird game built with React and HTML5 Canvas. Features smooth animations, collision detection, and responsive controls.",
      tech: ["React", "Canvas API", "JavaScript"],
      image: "/flappybird-preview.png",
      demo: "/game",
      github: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Interactive portfolio website with modern UI/UX design, particle animations, and smooth transitions. Built with React and CSS animations.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "/portfolio-preview.png",
      demo: "/",
      github: "#",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Network Monitoring Tool",
      description: "Cisco Packet Tracer simulation for network monitoring and troubleshooting. Includes real-time packet analysis and network topology visualization.",
      tech: ["Cisco Packet Tracer", "Network Protocols", "Simulation"],
      image: "/network-preview.png",
      demo: "#",
      github: "#",
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Photo Editing Suite",
      description: "Advanced photo editing application with layers, filters, and effects. Built for creative professionals and hobbyists.",
      tech: ["Photoshop", "Digital Imaging", "Creative Tools"],
      image: "/photoshop-preview.png",
      demo: "#",
      github: "#",
      status: "Coming Soon"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="page">
      <section className="section projects animate-in">
        <div className="container">
          <h2>My Projects</h2>
          <p className="section-description">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span className="project-icon">
                      {project.id === 1 && "🐦"}
                      {project.id === 2 && "💼"}
                      {project.id === 3 && "🌐"}
                      {project.id === 4 && "🎨"}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.demo !== "#" && (
                      <button
                        className="project-btn demo-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.demo === "/game") {
                            navigate(project.demo);
                          } else {
                            window.open(project.demo, '_blank');
                          }
                        }}
                      >
                        View Demo
                      </button>
                    )}
                    <button
                      className="project-btn details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>

            <div className="modal-content">
              <div className="modal-image">
                <div className="modal-placeholder">
                  <span className="modal-icon">
                    {selectedProject.id === 1 && "🐦"}
                    {selectedProject.id === 2 && "💼"}
                    {selectedProject.id === 3 && "🌐"}
                    {selectedProject.id === 4 && "🎨"}
                  </span>
                </div>
              </div>

              <div className="modal-details">
                <div className="modal-status">
                  <span className={`status-badge ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                    {selectedProject.status}
                  </span>
                </div>

                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.demo !== "#" && (
                    <button
                      className="modal-btn demo-btn"
                      onClick={() => {
                        if (selectedProject.demo === "/game") {
                          navigate(selectedProject.demo);
                          closeModal();
                        } else {
                          window.open(selectedProject.demo, '_blank');
                        }
                      }}
                    >
                      🚀 View Live Demo
                    </button>
                  )}
                  {selectedProject.github !== "#" && (
                    <button
                      className="modal-btn github-btn"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                    >
                      📁 View on GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
