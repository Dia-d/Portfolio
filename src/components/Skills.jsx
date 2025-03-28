import { FaCode, FaDatabase } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">Skills</h1>
      
      <div className="skills-container">
        <div className="skill-card">
          <div className="skill-icon">
            <BiCodeAlt />
          </div>
          <h2>Back-end Developer</h2>
          <p>Develop business logic and back-end system to support the product, create API, have vast experience with version control systems.</p>
          <div className="skill-details">
            <h3>Languages:</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaCode />
          </div>
          <h2>Front-end Developer</h2>
          <p>I code things from scratch, and gracefully bring the ideas to life and to the browser, paying maximal attention to your vision of the product.</p>
          <div className="skill-details">
            <h3>Technologies Stack:</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaDatabase />
          </div>
          <h2>Data Analyst</h2>
          <p>Transform raw data into meaningful insights, create data visualizations, and develop analytical solutions to drive business decisions.</p>
          <div className="skill-details">
            <h3>Tools & Skills:</h3>
            <ul>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
              <li>SQL & Database Management</li>
              <li>Excel & Power BI</li>
              <li>Python for Data Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 