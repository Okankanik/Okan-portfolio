import "./MiniCatalog.css";
import screenshot1 from "../assets/market otomasyonu/1.png";
import screenshot2 from "../assets/market otomasyonu/2.png";
import screenshot3 from "../assets/market otomasyonu/3.png";
import screenshot4 from "../assets/market otomasyonu/4.png";
import screenshot5 from "../assets/market otomasyonu/5.png";
import screenshot6 from "../assets/market otomasyonu/6.png";
import screenshot7 from "../assets/market otomasyonu/7.png";

const projectImages = [
  {
    image: screenshot1,
    alt: "Market automation cashier welcome and sign-in screen",
    title: "Cashier Login",
    description:
      "The application prompts the cashier to enter their name and password to start a checkout session. This step identifies the cashier before proceeding to the supermarket checkout operations.",
  },
  {
    image: screenshot2,
    alt: "Market automation cashier name prompt",
    title: "Cashier password",
    description:
      "The cashier enters their password to complete the sign-in process and gain access to the checkout operations.",
  },
  {
    image: screenshot3,
    alt: "Fresh produce category and product selection",
    title: "Main Menu",
    description:
      "The main menu provides six options: Produce, Market, Deli, Bakery, Payment, and Exit. Cashiers can select a category to browse products, proceed to payment, or exit the application. The menu uses a simple numbered interface for easy navigation through the checkout process.",
  },
  {
    image: screenshot4,
    alt: "Selecting a product quantity by weight",
    title: "Product Selection and Pricing",
    description:
      "After selecting a category, the application displays the available products along with their prices per kilogram. The cashier can review the product list and select the desired item to continue the checkout process.",
  },
  {
    image: screenshot5,
    alt: "Market automation category menu after adding an item",
    title: "Quantitiy Selection",
    description:
      "After selecting a product, the cashier enters the desired quantity in kilograms. The application uses the selected product’s price per kilogram to calculate the total cost based on the entered weight.",
  },
  {
    image: screenshot6,
    alt: "Available product categories in the market automation application",
    title: "Price Calculation and Return to Main Menu",
    description:
      "The application calculates the total price based on the selected product, its price per kilogram, and the entered quantity. After completing the calculation, the cashier returns to the main menu to select another category, continue shopping, or proceed to payment.",
  },
  {
    image: screenshot7,
    alt: "Completed checkout with total and payment details",
    title: "Payment Process",
    description:
      "By selecting option 5 from the main menu, the cashier proceeds to payment. The application allows the cashier to choose between cash and card payment, then processes the selected payment method and completes the checkout process.",
  },
];

function MarketAutomation() {
  return (
    <main className="portfolio-page mini-catalog-page market-automation-page">
      <a className="mini-catalog-back" href="/">
        ← Back to Home
      </a>

      <header className="mini-catalog-intro">
        <p className="mini-catalog-eyebrow">Project</p>
        <h1>Supermarket Automation System</h1>
        <p>
          Developed a console-based supermarket automation application using Java and Object-Oriented Programming (OOP) principles. Implemented cashier sign-in, product and category selection, quantity entry, payment processing, and receipt confirmation. Applied loops, conditional statements, methods, and classes to manage the checkout workflow, calculate product prices, and determine the total purchase amount. The project strengthened my understanding of core Java programming concepts and application logic.
        </p>
      </header>

      <section
        className="mini-catalog-gallery"
        aria-label="Market automation project screenshots"
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

export default MarketAutomation;
