import "./Home.css";
import projects from "../data/projects";

function Home() {
	return (
		<main className="portfolio-page portfolio-home">
			<section className="home-intro" aria-labelledby="home-name">
				<h1 className="home-name" id="home-name">
					Okan Kanık
				</h1>

				<div className="home-role-line">
					<h2>Software Developer</h2>
					<p className="home-location">
						<span aria-hidden="true">📍</span> İstanbul
					</p>
				</div>

				<div className="home-bio">
					<p>
						As a Software Developer, I develop web, desktop, and mobile applications using JavaScript, TypeScript, React, Vue.js, C#, Flutter, and SQL. I have hands-on project experience in frontend development, CRUD operations, REST API integration, responsive design, and component-based architecture. I am committed to continuous learning, improving my software development skills, and building user-focused, maintainable solutions.
					</p>
				</div>
			</section>

			<section className="home-projects" aria-labelledby="projects-heading">
				<div className="home-section-heading">
					<h2 id="projects-heading">Latest Projects</h2>
					<a href="/work">View all</a>
				</div>

				<div className="home-project-grid">
					{projects.map((project) => (
						<article className="home-project" key={project.title}>
							{project.href ? (
								<a className="home-project-link" href={project.href}>
									<img
										className={project.imageClassName}
										src={project.image}
										alt={project.alt}
										loading="lazy"
									/>
									<h3>{project.title}</h3>
								</a>
							) : (
								<>
									<img
										className={project.imageClassName}
										src={project.image}
										alt={project.alt}
										loading="lazy"
									/>
									<h3>{project.title}</h3>
								</>
							)}
						</article>
					))}
				</div>
			</section>
		</main>
	);
}

export default Home;
