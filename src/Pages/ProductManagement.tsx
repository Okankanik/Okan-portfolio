import "./MiniCatalog.css";
import screenshot1 from "../assets/ürün yönetim sistemi/1.png";
import screenshot2 from "../assets/ürün yönetim sistemi/2.png";
import screenshot3 from "../assets/ürün yönetim sistemi/3.png";

const projectImages = [
  {
    image: screenshot1,
    alt: "Product management system add product form and product list",
    title: "Product Dashboard",
    description:
      "The main page features a simple and user-friendly interface for adding products by entering the product name, selecting a category, uploading an image, and specifying the price. Added products are displayed in a list with Edit and Delete buttons, allowing users to update product information or remove items from the catalog easily.",
  },
  {
    image: screenshot2,
    alt: "Product management system product form and catalog",
    title: "Add Products",
    description:
      "Users can add new products by entering the product name, selecting a category, uploading an image from their device, and specifying the price. The simple form makes it easy to add products to the catalog and manage product information efficiently.",
  },
  {
    image: screenshot3,
    alt: "Product management system edit product form",
    title: "Edit Products",
    description:
      "Users can update existing product details through a pre-filled form, including the product name, category, image, and price. After saving the changes, the updated information is reflected in the product catalog, making product management simple and efficient.",
  },
];

function ProductManagement() {
  return (
    <main className="portfolio-page mini-catalog-page product-management-page">
      <a className="mini-catalog-back" href="/">
        ← Back to Home
      </a>

      <header className="mini-catalog-intro">
        <p className="mini-catalog-eyebrow">Project</p>
        <h1>Product Management System</h1>
        <p>
          Developed a responsive e-commerce product management application using React, JavaScript, HTML5, CSS3, and Bootstrap. Implemented CRUD operations to add, list, update, and delete products. Used LocalStorage to store product data locally, allowing product records to persist between page refreshes. The application focuses on responsive design, reusable UI components, and efficient product management.
        </p>
      </header>

      <section
        className="mini-catalog-gallery"
        aria-label="Product management system screenshots"
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

export default ProductManagement;
