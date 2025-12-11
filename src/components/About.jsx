import { useEffect, useRef } from 'react';
import aboutImage from '../assets/about.jpg';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title');
            const text = entry.target.querySelector('.about-text');
            const image = entry.target.querySelector('.about-image');
            if (title) title.classList.add('animate');
            if (text) text.classList.add('animate');
            if (image) image.classList.add('animate');
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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Donapa Venu, a passionate Full Stack Developer with a strong foundation in 
              modern web technologies. I love creating efficient, scalable, and user-friendly applications 
              that solve real-world problems.
            </p>
            <p>
              My journey in software development has been driven by curiosity and a desire to build 
              innovative solutions. I enjoy working with cutting-edge technologies and continuously 
              learning new skills to stay ahead in this rapidly evolving field.
            </p>
            <p>
              When I'm not coding, you can find me solving algorithmic challenges, contributing to 
              open-source projects, or exploring new frameworks and libraries.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Fast Learner</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span>Problem Solver</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Goal Oriented</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <span>Team Player</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src={aboutImage} alt="About Donapa Venu" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

