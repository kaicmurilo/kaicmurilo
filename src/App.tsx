// src/App.tsx
import React, { useState } from "react";
import "./App.css";
import AboutModal from "./components/AboutModal";

export default function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <button className="link">Brazil</button>
        <button className="link">Light mode</button>
        <nav className="nav">
          <a className="navLink" onClick={() => setIsAboutModalOpen(true)}>
            About
          </a>
          {/* <a href="/blog" className="navLink">
          Blog
        </a>
        <a href="/experiments" className="navLink">
          Experiments
        </a>
        <a href="/utilities" className="navLink">
          Utilities
        </a> */}
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
          <a href="/posts/starting" className="postLink">
            🚀 Starting… →
          </a>
          <a href="/posts/first-contact" className="postLink">
            💻 History →
          </a>
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
