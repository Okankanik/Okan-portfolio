
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import MiniCatalog from "./Pages/MiniCatalog";
import Calculator from "./Pages/Calculator";
import StudentManagement from "./Pages/StudentManagement";
import ProductManagement from "./Pages/ProductManagement";
import MarketAutomation from "./Pages/MarketAutomation";
import PersonelVeriTest from "./Pages/PersonelVeriTest";
import Work from "./Pages/Work";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/my-resume": "Resume",
  "/mini-katolog": "Mini Catalog",
  "/hesap-makinesi": "Calculator",
  "/ogrenci-yonetim-sistemi": "Student Management System",
  "/urun-yonetim-sistemi": "Product Management System",
  "/market-otomasyonu": "Market Automation",
  "/personel-veri-test": "Personnel Data Test",
};

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const activePage = pageTitles[path] ?? "Home";

  return (
    <>
      <Navbar activePage={activePage} />
      {activePage === "Home" ? (
        <Home />
      ) : activePage === "Mini Catalog" ? (
        <MiniCatalog />
      ) : activePage === "Calculator" ? (
        <Calculator />
      ) : activePage === "Student Management System" ? (
        <StudentManagement />
      ) : activePage === "Product Management System" ? (
        <ProductManagement />
      ) : activePage === "Market Automation" ? (
        <MarketAutomation />
      ) : activePage === "Personnel Data Test" ? (
        <PersonelVeriTest />
      ) : activePage === "Work" ? (
        <Work />
      ) : activePage === "About" ? (
        <About />
      ) : activePage === "Resume" ? (
        <Resume />
      ) : (
        <main className="portfolio-page">
          <h1>{activePage}</h1>
        </main>
      )}
    </>
  );
}

export default App;
