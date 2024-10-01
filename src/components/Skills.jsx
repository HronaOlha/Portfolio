// import React from 'react'
import techStackIcons from "../assets/data/techStack";

const Skills = () => {
  return (
    <section aria-label="Tech Stack">
      <ul>
        {techStackIcons.map((techStackIcon) => (
          <li key={techStackIcon.id}>
            <img src={techStackIcon.src} alt={techStackIcon.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
