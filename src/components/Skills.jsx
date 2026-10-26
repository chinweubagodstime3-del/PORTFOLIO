
const skills = [
  {
    name: "HTML",
    description: "Building structured web pages",
    symbol: "01",
  },
  {
    name: "CSS",
    description: "Styling responsive interfaces",
    symbol: "02",
  },
  {
    name: "JavaScript",
    description: "Adding interactive functionality",
    symbol: "03",
  },
  {
    name: "React",
    description: "Building reusable UI components",
    symbol: "04",
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <p className="eyebrow">WHAT I WORK WITH</p>

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <p className="skills-intro">
        Technologies I use to create modern web experiences.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-number">
              {skill.symbol}
            </span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
