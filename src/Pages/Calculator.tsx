import "./MiniCatalog.css";
import screenshot1 from "../assets/hesap makinası/1.jpeg";
import screenshot2 from "../assets/hesap makinası/2.jpeg";
import screenshot3 from "../assets/hesap makinası/3.jpeg";
import screenshot4 from "../assets/hesap makinası/4.jpeg";
import screenshot5 from "../assets/hesap makinası/5.jpeg";

const projectImages = [
  {
    image: screenshot1,
    alt: "Calculator app logo",
    title: "Light Theme",
    description:
      "In light mode, the calculator features a clean white interface with clearly visible arithmetic symbols and buttons for a simple, user-friendly appearance.",
  },
  {
    image: screenshot5,
    alt: "Calculator app displaying a percentage calculation",
    title: "Dark Theme",
    description:
      "In dark mode, the calculator features a sleek dark interface with clearly visible arithmetic symbols and buttons for a simple, user-friendly appearance.",
  },
  {
    image: screenshot2,
    alt: "Calculator app displaying a multiplication calculation",
    title: "Dark Theme",
    description:
      "The dark theme features a modern, dark interface with clearly visible buttons. The screenshot demonstrates a simple addition operation, showcasing the calculator’s basic arithmetic functionality.",
  },
  {
    image: screenshot3,
    alt: "Calculator app ready for a new calculation",
    title: "Operations",
    description:
      "The screenshot demonstrates a multi-step multiplication calculation, highlighting the calculator’s ability to handle arithmetic operations accurately.",
  },
  {
    image: screenshot4,
    alt: "Calculator app displaying an addition result",
    title: "Percentage Calculation",
    description:
      "This screen demonstrates a percentage calculation, showcasing the calculator’s ability to perform percentage-based arithmetic operations.",
  },
];

function Calculator() {
  return (
    <main className="portfolio-page mini-catalog-page">
      <a className="mini-catalog-back" href="/">
        ← Back to Home
      </a>

      <header className="mini-catalog-intro">
        <p className="mini-catalog-eyebrow">Project</p>
        <h1>Calculator – Mobile Application</h1>
        <p>
          Developed a cross-platform mobile calculator application using Flutter and Dart in Visual Studio Code. Implemented essential arithmetic operations, an intuitive user interface, and dark and light themes. Used reusable UI components and local data storage with SharedPreferences to save user preferences, providing a simple and user-friendly mobile experience.
        </p>
      </header>

      <section className="mini-catalog-gallery" aria-label="Calculator project screenshots">
        {projectImages.map((item, index) => (
          <article className="mini-catalog-item" key={item.title}>
            <div className="mini-catalog-image">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div className="mini-catalog-caption">
              <span className="mini-catalog-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Calculator;
