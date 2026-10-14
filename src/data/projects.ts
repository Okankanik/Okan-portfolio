import projectLogo from "../assets/mini katolog/proje logo.jpeg";
import calculatorLogo from "../assets/hesap makinası/hesapMakinası.jpeg";
import studentManagementLogo from "../assets/öğrenci yönetim sistemi/studentmsystem.jpeg";
import productManagementCover from "../assets/ürün yönetim sistemi/teknik-urun-yonetimi_1588001514.jpg";
import marketAutomationCover from "../assets/market otomasyonu/marketoutamation.jpeg";
import personelVeriTestCover from "../assets/personel veri test/personeldata.jpeg";

const projects = [
  {
    title: "Mini Catalog",
    image: projectLogo,
    alt: "Shoply uygulamasının logosu",
    href: "/mini-katolog",
    description:
      "A product catalog experience with product browsing, details, and account screens.",
  },
  {
    title: "Calculator",
    image: calculatorLogo,
    alt: "Calculator app logo",
    imageClassName: "home-project-image-contain",
    href: "/hesap-makinesi",
    description:
      "A calculator application with a straightforward interface for everyday calculations.",
  },
  {
    title: "Student Management System",
    image: studentManagementLogo,
    alt: "Student management system project logo",
    imageClassName: "home-project-image-contain",
    href: "/ogrenci-yonetim-sistemi",
    description:
      "A student records application with CRUD operations, filtering, validation, and pagination.",
  },
  {
    title: "Product Management System",
    image: productManagementCover,
    alt: "Technical product management logo",
    imageClassName: "home-project-image-contain",
    href: "/urun-yonetim-sistemi",
    description:
      "A product management project focused on organizing and maintaining product records.",
  },
  {
    title: "Market Automation",
    image: marketAutomationCover,
    alt: "Checkout and touchscreens used in the market automation system",
    imageClassName: "home-project-image-contain",
    href: "/market-otomasyonu",
    description:
      "A Java checkout workflow for product selection, pricing, and payment processing.",
  },
  {
    title: "Personnel Data Test",
    image: personelVeriTestCover,
    alt: "Personnel data test screen",
    imageClassName: "home-project-image-contain",
    href: "/personel-veri-test",
    description:
      "A Windows Forms and SQL Server application for viewing and managing personnel records.",
  },
];

export default projects;
