import "./Resume.css";
import resumePdf from "../pdf/Okan-kanık-.pdf";

function Resume() {
  return (
    <main className="portfolio-page portfolio-resume">
      <div className="resume-breadcrumb" aria-label="Breadcrumb">
        <a href="/work">All Projects</a>
        <span aria-hidden="true">|</span>
        <span aria-current="page">My Resume</span>
      </div>

      <h1 className="resume-heading">My Resume</h1>
      <h2 className="resume-preview-heading">Resume in PDF Format:</h2>

      <section className="resume-preview" aria-label="Resume preview">
        <iframe
          className="resume-pdf"
          src={resumePdf}
          title="Okan Kanık resume PDF"
        />
      </section>

      <a
        className="resume-view-pdf"
        href={resumePdf}
        target="_blank"
        rel="noreferrer"
      >
        VIEW PDF <span aria-hidden="true">→</span>
      </a>

      <footer className="about-footer resume-footer">
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

export default Resume;