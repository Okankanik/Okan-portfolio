import "./About.css";
import profileImage from "../assets/cv foto.jpeg";

const aboutTitle = ["A", "b", "o", "u", "t", "\u00a0", "m", "e"];

function About() {
  return (
    <main className="portfolio-page portfolio-about">
      <section className="about-hero" aria-labelledby="about-heading">
        <h1 id="about-heading" className="about-heading" aria-label="About me">
          {aboutTitle.map((letter, index) => (
            <span key={`${letter}-${index}`} className="about-letter">
              {letter}
            </span>
          ))}
        </h1>

        <p className="about-intro">
          I am a software developer who aims to build both functional and
          meaningful digital products by combining creative problem-solving with
          technical precision. I enjoy turning ideas into practical solutions,
          improving user experience, and developing software that feels smooth,
          useful, and maintainable.
        </p>

        <div className="about-photo-wrapper">
          <div className="about-photo-frame">
            {profileImage ? (
              <img src={profileImage} alt="Okan Kanık" />
            ) : (
              <div className="photo-placeholder">Your Photo</div>
            )}
          </div>
        </div>

        <div className="about-copy">
          <p>
            I have worked on web, desktop, and mobile application projects using
            JavaScript, TypeScript, React, Vue.js, C#, Flutter, and SQL. My focus
            is on building clean interfaces, reliable logic, and scalable systems
            that make real user impact.
          </p>

          <p>
            Throughout my projects, I have gained hands-on experience in frontend
            development, API integration, CRUD workflows, responsive design, and
            database-driven app development. I enjoy learning continuously,
            improving my craft, and creating solutions that balance aesthetics,
            performance, and business needs.
          </p>

          <p>
            What motivates me most is solving meaningful problems and turning
            ideas into products people genuinely enjoy using. I value thoughtful
            design, clear communication, and a strong product mindset in every
            project I take on.
          </p>

          <p>
            I’m always happy to connect with people who are passionate about
            technology, digital products, and creative work.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>© Okan Kanık | 2026</p>
        <nav className="about-footer-links" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/work">Work</a>
          <a href="/my-resume">Resume</a>
        </nav>
      </footer>
    </main>
  );
}

export default About;
