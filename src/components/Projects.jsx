
const projects = [
  {
    number: "01",
    name: "CloudBox",
    category: "Cloud Storage App",
    description:
      "A cloud storage interface for managing files, viewing file details, and creating a clean upload experience.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://cloudbox-six.vercel.app/",
    source: "https://github.com/chinweubagodstime3-del/CLOUDBOX",
  },
  {
    number: "02",
    name: "Nairabox Event Platform",
    category: "Event Ticketing",
    description:
      "An event platform where organisers can create and manage events while customers can explore events and purchase tickets.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://nairabox.vercel.app/",
    source: "",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <p className="eyebrow">MY RECENT WORK</p>

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <p className="projects-intro">
        Here are some projects I have been building and learning from.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.name}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project ↗
              </a>

              {project.source && (
                <a
                  href={project.source}
                  className="project-source"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
