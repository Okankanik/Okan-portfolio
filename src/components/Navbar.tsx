import "./Navbar.css";

function Navbar({ activePage }: { activePage: string }) {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Resume", href: "/my-resume" },
  ];

  return (
    <nav className="navbar portfolio-navbar">
      <div className="container-fluid portfolio-navbar-container">
        <div className="portfolio-nav-links">
          {navItems.map((item, index) => (
            <span className="portfolio-nav-item" key={item.name}>
              {index === 1 && (
                <span className="portfolio-divider">|</span>
              )}

              <a
                href={item.href}
                className={[
                  activePage === item.name ? "active" : "",
                  item.name === "Home" ? "home-link" : "",
                ].join(" ")}
              >
                {item.name}
              </a>
            </span>
          ))}
        </div>

        <div className="portfolio-social-links">
          <a
            href="https://www.linkedin.com/in/okan-kan%C4%B1k/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 9h3.55v11.45H3.56V9ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
              />
            </svg>
          </a>
          <a
            href="mailto:okankanik04@gmail.com"
            aria-label="Gmail"
            title="Gmail"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 18V6.5" fill="none" stroke="#4285f4" strokeWidth="2.5" />
              <path d="m3 6.5 9 6.4 9-6.4" fill="none" stroke="#ea4335" strokeWidth="2.5" />
              <path d="M21 6.5V18" fill="none" stroke="#34a853" strokeWidth="2.5" />
              <path d="M3 18h18" fill="none" stroke="#fbbc04" strokeWidth="2.5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;