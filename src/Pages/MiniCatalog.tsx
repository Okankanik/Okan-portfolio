import "./MiniCatalog.css";
import loginScreenshot from "../assets/mini katolog/Login.png";
import homeScreenshot from "../assets/mini katolog/AnaSayfa.png";
import productDetailScreenshot from "../assets/mini katolog/ÜrünDetayı.png";
import productListScreenshot from "../assets/mini katolog/ÜrünListesi.png";

const projectImages = [
  {
    image: loginScreenshot,
    alt: "Shoply uygulamasında kullanıcı adı giriş ekranı",
    title: "User Login",
    description:
      "Users can enter their name to continue using the application. The simple screen design makes the login process quick and easy.",
  },
  {
    image: homeScreenshot,
    alt: "Shoply uygulamasının ürünleri gösteren ana ekranı",
    title: "Home Page",
    description:
      "The home page features a promotional banner and product cards populated with data fetched from a REST API. Products are displayed with their images and prices, allowing users to browse and explore the catalog easily.",
  },
  {
    image: productDetailScreenshot,
    alt: "Shoply uygulamasında ürün açıklaması ve sepete ekleme alanı",
    title: "Product Details",
    description:
      "Product details screen displays the product image, description, and price information. Users can add the product to their cart from this screen.",
  },
  {
    image: productListScreenshot,
    alt: "Shoply uygulamasında sepete eklenen ürünler ve toplam tutar",
    title: "Product List",
    description:
      "The product list shows the items added to the cart and the total amount. Users can remove items from the cart and complete their purchase.",
  },
];

function MiniCatalog() {
  return (
    <main className="portfolio-page mini-catalog-page">
      <a className="mini-catalog-back" href="/">
        ← Back to Home
      </a>

      <header className="mini-catalog-intro">
        <p className="mini-catalog-eyebrow">Proje</p>
        <h1>Shoply – Mobile Shopping Application</h1>
        <p>
          Developed a cross-platform mobile shopping application using Flutter and Dart in Visual Studio Code. Integrated a REST API to fetch and display product data, including images, descriptions, and prices. Implemented product listing, product detail screens, and shopping cart functionality. Applied responsive UI design, reusable components, and API integration to deliver a user-friendly mobile application.
        </p>
      </header>

      <section className="mini-catalog-gallery" aria-label="Proje görselleri">
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

export default MiniCatalog;
