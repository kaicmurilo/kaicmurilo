
import React, { useState, useEffect } from "react";
import "./App.css";
import AboutModal from "./components/AboutModal";

export default function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <a className="navLink" onClick={() => setIsAboutModalOpen(true)}>
            About
          </a>
          <button className="themeToggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      <main className="main">
        <h1 className="title">
          Kaic
          <br />
          Nunes
        </h1>
        <div className="bio">
          A <span className="highlight">Back-end Engineer</span>
          <br />
          exploring and having fun
        </div>
      </main>

      <footer className="footer">
        <div className="posts">
          {/* <a href="/posts/starting" className="postLink">
            🚀 Starting… →
          </a>
          <a href="/posts/first-contact" className="postLink">
            💻 History →
          </a> */}
          <a
            href="https://www.linkedin.com/in/kaic-murilo-nunes-461238112/"
            target="_blank"
            rel="noopener noreferrer"
            className="postLink"
          >
            🗼 Linkedin →
          </a>
        </div>
        <div className="contact">
          Want to hire me?
          <br />
          <a href="mailto:kaicmurilo@live.com" className="link">
            kaicmurilo@live.com
          </a>
        </div>
      </footer>

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </div>
  );
}
