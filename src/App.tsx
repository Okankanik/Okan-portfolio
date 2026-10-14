
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
  "/mini-katolog": "Mini Katolog",
  "/hesap-makinesi": "Hesap Makinesi",
  "/ogrenci-yonetim-sistemi": "Öğrenci Yönetim Sistemi",
  "/urun-yonetim-sistemi": "Ürün Yönetim Sistemi",
  "/market-otomasyonu": "Market Otomasyonu",
  "/personel-veri-test": "Personel Veri Test",
};

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const activePage = pageTitles[path] ?? "Home";

  return (
    <>
      <Navbar activePage={activePage} />
      {activePage === "Home" ? (
        <Home />
      ) : activePage === "Mini Katolog" ? (
        <MiniCatalog />
      ) : activePage === "Hesap Makinesi" ? (
        <Calculator />
      ) : activePage === "Öğrenci Yönetim Sistemi" ? (
        <StudentManagement />
      ) : activePage === "Ürün Yönetim Sistemi" ? (
        <ProductManagement />
      ) : activePage === "Market Otomasyonu" ? (
        <MarketAutomation />
      ) : activePage === "Personel Veri Test" ? (
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
