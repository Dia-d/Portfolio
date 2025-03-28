import { useState, useEffect } from 'react'
import './App.css'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm a student aspiring to delve into data analytics with business.";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // When typing is complete, wait a moment then trigger the move animation
      const moveTimeout = setTimeout(() => {
        setIsTypingComplete(true);
        // Show circle after text moves to top
        setTimeout(() => {
          setShowCircle(true);
        }, 300);
      }, 300);
      return () => clearTimeout(moveTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="app-container">
      <div className={`content-wrapper ${isTypingComplete ? 'move-to-top' : ''}`}>
        <div className="animated-text">
          <h1>{text}</h1>
        </div>
        <div className={`profile-circle ${showCircle ? 'show' : ''}`}>
          <img 
            src="https://th.bing.com/th/id/OIP.cuog7y-5umSrYdMxBmqqBQHaE8?w=195&h=130&c=7&r=0&o=5&dpr=1.1&pid=1.7" 
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
      <Skills />
      <Experience />
    </div>
  )
}

export default App
