// src/components/AboutModal.tsx
import React from 'react'
import  './AboutModal.css'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <h2>About Me</h2>
        <p>
        I’m Kaic Nunes, a Back-end Engineer specializing in Node.js, Python, C#, LLM models, OCR, RPA, automations, APIs, and integrations. Passionate about clean architecture, I build maintainable, and scalable systems.
        </p>
      </div>
    </div>
  )
}

export default AboutModal
