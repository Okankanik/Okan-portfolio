import "./Work.css";
import projects from "../data/projects";

function Work() {
  return (
    <main className="portfolio-page work-page">
      <header className="work-intro">
        <h1>My Work</h1>
        <p>
          A selection of projects exploring web, desktop, and application
          development.
        </p>
      </header>

      <section className="work-projects" aria-labelledby="work-projects-heading">
        <h2 id="work-projects-heading">All Projects</h2>
        <div className="work-project-grid">
          {projects.map((project) => (
            <a
              className="work-project-card"
              href={project.href}
              key={project.title}
            >
              <div className="work-project-image">
                <img
                  className={project.imageClassName}
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
              </div>
              <div className="work-project-caption">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Work;