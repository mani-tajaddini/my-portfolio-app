import { useEffect, useState } from "react";

const Navbar = () => {
  const [pn, setPn] = useState("");
  useEffect(() => {
    setPn(window.location.pathname);
  }, []);
  return (
    <header
      className="header-top bg-grey justify-content-center"
      id="navigation"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-4 text-center d-none d-lg-block">
            <img className="navbar-brand " href="#" src="/icons/maniLogo.png" />
          </div>
          <div className="col-lg-8 col-md-12">
            <nav className="navbar navbar-expand-lg navigation-2 navigation navbar-dark">
              <img
                className="navbar-brand text-uppercase d-lg-none frt"
                href="/"
                src="/icons/maniLogo.png"
              />
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul id="menu" className="menu navbar-nav mx-auto">
                  <li
                    className={`nav-item come-slowly-towards ${
                      pn === "/" ? "active" : ""
                    }`}
                  >
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li
                    className={`nav-item come-slowly-towards ${
                      pn === "/" ? "active" : ""
                    }`}
                  >
                    <a className="nav-link" href="/#about">
                      About <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className={`nav-item ${pn === "/cv" ? "active" : ""}`}>
                    <a href="/cv" className="nav-link">
                      CV
                    </a>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      pn === "/blog" || pn.match("/blog/*") ? "active" : ""
                    }`}
                  >
                    <a
                      href="/blog"
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        style={{
                          color: `${
                            pn === "/blog/philosophy" ? "#72caf0" : "white"
                          }`
                        }}
                        href="/blog/philosophy"
                      >
                        Philosophy
                      </a>
                      <a
                        className="dropdown-item"
                        style={{
                          color: `${pn === "/blog/math" ? "#72caf0" : "white"}`
                        }}
                        href="/blog/math"
                      >
                        Math
                      </a>
                      <a
                        className="dropdown-item"
                        style={{
                          color: `${
                            pn === "/blog/programming" ? "#72caf0" : "white"
                          }`
                        }}
                        href="/blog/programming"
                      >
                        Programming
                      </a>
                      <a
                        className="dropdown-item"
                        style={{
                          color: `${
                            pn === "/blog/introspection" ? "#72caf0" : "white"
                          }`
                        }}
                        href="/blog/introspection"
                      >
                        Introspection
                      </a>
                      <a
                        className="dropdown-item"
                        style={{
                          color: `${
                            pn === "/blog/languages" ? "#72caf0" : "white"
                          }`
                        }}
                        href="/blog/languages"
                      >
                        Languages
                      </a>
                      <a
                        className="dropdown-item"
                        style={{
                          color: `${pn === "/blog/food" ? "#72caf0" : "white"}`
                        }}
                        href="/blog/food"
                      >
                        Food
                      </a>
                    </div>
                  </li>
                  <li
                    className={`nav-item come-slowly-towards ${
                      pn === "/" ? "active" : ""
                    }`}
                  >
                    <a className="nav-link" href="/#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li
                    className={`nav-item come-slowly-towards ${
                      pn === "/" ? "active" : ""
                    }`}
                  >
                    <a className="nav-link" href="/#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="list-inline text-nowrap mb-0 d-block d-lg-none text-secondary">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/maani.tajaldini">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/mtajaldini">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/mtajaldini/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/mani-tajaddini" rel="me">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://gitlab.com/mtajaldini" rel="me">
                      <i className="fab fa-gitlab"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://scholar.google.com/citations?user=wcOyjwgAAAAJ&hl=en"
                      rel="me"
                    >
                      <i className="ai ai-google-scholar"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="text-right d-none d-lg-block">
              <ul className="list-inline text-nowrap mb-0">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/maani.tajaldini">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/mtajaldini">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/mtajaldini/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/mani-tajaddini" rel="me">
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://gitlab.com/mtajaldini" rel="me">
                    <i className="fab fa-gitlab"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://scholar.google.com/citations?user=wcOyjwgAAAAJ&hl=en"
                    rel="me"
                  >
                    <i className="ai ai-google-scholar"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
