import { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const sectionRef = useRef(null);

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'VIT-AP University',
      period: '2023 - 2027',
      location: 'Amaravati,Andhra Pradesh,INDIA',
      achievements: [
        
      ]
    },
    {
      degree: 'Intermediate',
      field: 'MPC',
      institution: 'Jawahar navodaya vidyalaya',
      period: 'upto-2023',
      location: 'Ananthapur,Andhra Pradesh,INDIA',
      achievements: [
        
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title');
            const grid = entry.target.querySelector('.education-grid');
            if (title) title.classList.add('animate');
            if (grid) grid.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          
          Education
        </h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-field">{edu.field}</h4>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-location">{edu.location}</p>
                <span className="education-period">{edu.period}</span>
                <ul className="education-achievements">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

