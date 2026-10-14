import "./MiniCatalog.css";
import screenshot1 from "../assets/öğrenci yönetim sistemi/1.png";
import screenshot2 from "../assets/öğrenci yönetim sistemi/2.png";
import screenshot3 from "../assets/öğrenci yönetim sistemi/3.png";
import screenshot4 from "../assets/öğrenci yönetim sistemi/4.png";

const projectImages = [
  {
    image: screenshot1,
    alt: "Student management system add student form",
    title: "Student Dashboard",
    description:
      "The main page displays student records in a structured table, allowing users to view student details, filter records by class, and navigate through paginated results. Each student record includes edit and delete buttons, enabling users to update student information or remove records easily. The interface provides convenient access to student management actions, creating an organized and user-friendly experience.",
  },
  {
    image: screenshot2,
    alt: "Student management system edit student form",
    title: "Add Student Form",
    description:
      "Users can add new student records through a form containing first name, last name, email, phone number, class, and registration date fields. Form validation ensures that required information is entered correctly before submission, helping maintain accurate and consistent student records.",
  },
  {
    image: screenshot3,
    alt: "Student management system student edit form with pre-filled data",
    title: "Edit Student Information",
    description:
      "Users can update existing student records through a pre-filled form containing first name, last name, email, phone number, class, and registration date. Form validation helps ensure that updated information is entered correctly before saving changes.",
  },
  {
    image: screenshot4,
    alt: "Student management system delete confirmation dialog",
    title: "Delete Confirmation",
    description:
      "Users can delete student records directly from the student list. A confirmation dialog helps prevent accidental deletions by asking users to confirm the action before permanently removing a record from LocalStorage.",
  },
];

function StudentManagement() {
  return (
    <main className="portfolio-page mini-catalog-page student-management-page">
      <a className="mini-catalog-back" href="/">
        ← Back to Home
      </a>

      <header className="mini-catalog-intro">
        <p className="mini-catalog-eyebrow">Project</p>
        <h1>Student Management System</h1>
        <p>
          A responsive student management application developed using Vue.js, TypeScript, Bootstrap, and Element Plus. It enables users to add, edit, delete, and list student records using CRUD operations. The application also includes class-based filtering, pagination, form validation, and user notifications. LocalStorage is used to store student data locally, providing a practical and user-friendly student tracking experience.
        </p>
      </header>

      <section
        className="mini-catalog-gallery"
        aria-label="Student management system screenshots"
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

export default StudentManagement;
