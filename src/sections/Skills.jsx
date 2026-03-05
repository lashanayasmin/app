import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'React.js', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Redux', level: 85 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    name: 'SQA & Testing',
    skills: [
      { name: 'Manual Testing', level: 95 },
      { name: 'Test Case Design', level: 90 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 92 },
     
    ],
  },
];

const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Redux', 

  'REST API', 'Git', 'GitHub', 'Node.js', 'MongoDB', 'Express',
];

function SkillBar({ name, level, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Technologies & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've worked with a wide range of technologies across the full stack. 
            Here's what I bring to the table.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient flex items-center justify-center text-sm text-white">
                  {category.name[0]}
                </span>
                {category.name}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={categoryIndex * 200 + skillIndex * 100}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech stack cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full glass hover:bg-gradient hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
