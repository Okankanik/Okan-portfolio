import "./MiniCatalog.css";
import screenshot1 from "../assets/personel veri test/1.png";
import screenshot2 from "../assets/personel veri test/2.png";
import screenshot3 from "../assets/personel veri test/3.png";

const projectImages = [
  {
    image: screenshot1,
    alt: "Personnel data test screen preview",
    title: "Login Screen",
    description:
      "The login screen allows users to access the application by entering their username and password. Built with C# Windows Forms and connected to a SQL Server LocalDB database, the authentication process validates user credentials using SQL queries before granting access.",
  },
  {
    image: screenshot2,
    alt: "Second personnel data test screen",
    title: "Invalid Login Credentials",
    description:
      "This screen displays an error message when the user enters an incorrect username or password. The application informs the user that the credentials are invalid and allows them to try logging in again.",
  },
  {
    image: screenshot3,
    alt: "Data table displaying personnel records",
    title: "Personnel Data Table",
    description:
      "After successful login, the application retrieves personnel records from the SQL Server database and displays them in a table. The table includes ID, first name, last name, Turkish ID number, birth year, place of birth, and profile image, providing an organized view of personnel information.",
  },
];

function PersonelVeriTest() {
  return (
    <main className="portfolio-page mini-catalog-page personel-veri-test-page">
      <a className="mini-catalog-back" href="/">
        ← Back to Home
      </a>

      <header className="mini-catalog-intro">
        <p className="mini-catalog-eyebrow">Project</p>
        <h1>Personnel Data Test</h1>
        <p>
          Developed a Windows Forms application using C#, .NET, and SQL Server to manage and display personnel records. Implemented a user login system with username and password authentication, using SQL queries and ADO.NET to validate credentials and connect to a LocalDB database. Designed a user-friendly graphical interface with Windows Forms to provide secure access and organized personnel data management.
        </p>
      </header>

      <section
        className="mini-catalog-gallery"
        aria-label="Personnel data test screenshots"
      >
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

export default PersonelVeriTest;
