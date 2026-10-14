import projectLogo from "../assets/mini katolog/proje logo.jpeg";
import calculatorLogo from "../assets/hesap makinası/6.jpeg";
import studentManagementLogo from "../assets/öğrenci yönetim sistemi/images.png";
import productManagementCover from "../assets/ürün yönetim sistemi/teknik-urun-yonetimi_1588001514.jpg";
import marketAutomationCover from "../assets/market otomasyonu/market.jpeg";
import personelVeriTestCover from "../assets/personel veri test/1.png";

const projects = [
  {
    title: "Mini Katolog",
    image: projectLogo,
    alt: "Shoply uygulamasının logosu",
    href: "/mini-katolog",
    description:
      "A product catalog experience with product browsing, details, and account screens.",
  },
  {
    title: "Hesap Makinesi",
    image: calculatorLogo,
    alt: "Hesap makinesi uygulamasının logosu",
    href: "/hesap-makinesi",
    description:
      "A calculator application with a straightforward interface for everyday calculations.",
  },
  {
    title: "Öğrenci Yönetim Sistemi",
    image: studentManagementLogo,
    alt: "Öğrenci Yönetim Sistemi proje logosu",
    imageClassName: "home-project-image-contain",
    href: "/ogrenci-yonetim-sistemi",
    description:
      "A student records application with CRUD operations, filtering, validation, and pagination.",
  },
  {
    title: "Ürün Yönetim Sistemi",
    image: productManagementCover,
    alt: "Ürün Yönetim Sistemi teknik ürün yönetimi logosu",
    imageClassName: "home-project-image-contain",
    href: "/urun-yonetim-sistemi",
    description:
      "A product management project focused on organizing and maintaining product records.",
  },
  {
    title: "Market Otomasyonu",
    image: marketAutomationCover,
    alt: "Market otomasyonunda kullanılan kasa ve dokunmatik ekranlar",
    imageClassName: "home-project-image-cover",
    href: "/market-otomasyonu",
    description:
      "A Java checkout workflow for product selection, pricing, and payment processing.",
  },
  {
    title: "Personel Veri Test",
    image: personelVeriTestCover,
    alt: "Personel veri test ekranı",
    imageClassName: "home-project-image-cover",
    href: "/personel-veri-test",
    description:
      "A Windows Forms and SQL Server application for viewing and managing personnel records.",
  },
];

export default projects;
