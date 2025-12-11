import { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Company Name',
      period: '2023 - Present',
      location: 'Location',
      description: [
        'Developed and maintained web applications using React, Node.js, and modern frameworks',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented RESTful APIs and optimized database queries for improved performance',
        'Participated in code reviews and maintained coding standards'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Previous Company',
      period: '2021 - 2023',
      location: 'Location',
      description: [
        'Built responsive web applications using React and JavaScript',
        'Worked on backend services using Node.js and Express',
        'Integrated third-party APIs and services',
        'Fixed bugs and improved application performance'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title');
            const timeline = entry.target.querySelector('.timeline');
            if (title) title.classList.add('animate');
            if (timeline) timeline.classList.add('animate');
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
    // <section id="experience" className="experience" ref={sectionRef}>
    //   {/* <div className="container">
    //     <h2 className="section-title">
    //       <span className="title-number">03.</span>
    //       Experience
    //     </h2>
    //     <div className="timeline">
    //       {experiences.map((exp, index) => (
    //         <div key={index} className="timeline-item">
    //           <div className="timeline-marker"></div>
    //           <div className="timeline-content">
    //             <div className="timeline-header">
    //               <h3 className="timeline-title">{exp.title}</h3>
    //               <span className="timeline-period">{exp.period}</span>
    //             </div>
    //             <h4 className="timeline-company">{exp.company}</h4>
    //             <p className="timeline-location">{exp.location}</p>
    //             <ul className="timeline-description">
    //               {exp.description.map((item, idx) => (
    //                 <li key={idx}>{item}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div> */}
    // </section>
    <div></div>
  );
};

export default Experience;

