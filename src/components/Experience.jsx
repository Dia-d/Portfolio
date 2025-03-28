import { FaRegLightbulb, FaTools, FaRocket, FaChartLine, FaSearchDollar } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h1 className="experience-title">My Experience</h1>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaRegLightbulb />
          </div>
          <div className="timeline-content right">
          <h3>Incomming</h3>
            <h2>----------</h2>
            <p>Soon to be</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaSearchDollar />
          </div>
          <div className="timeline-content left">
          <h3>Incomming</h3>
            <h2>----------</h2>
            <p>Soon to be</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaTools />
          </div>
          <div className="timeline-content right">
          <h3>Incomming</h3>
            <h2>----------</h2>
            <p>Soon to be</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaRocket />
          </div>
          <div className="timeline-content left">
          <h3>Incomming</h3>
            <h2>----------</h2>
            <p>Soon to be</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaChartLine />
          </div>
          <div className="timeline-content right">
            <h3>2054-2055</h3>
            <h2>Growth and Evaluation</h2>
            <p>Acquire new customers, scale operations, evaluate performance, and develop long-term growth strategy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 