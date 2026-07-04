import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { HelpPage } from "./pages/HelpPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const navItems = [
  { to: "/", label: "首页", end: true },
  { to: "/about", label: "关于" },
  { to: "/help", label: "帮助" }
];

const App = (): JSX.Element => {
  return (
    <div className="shell">
      <header className="topbar">
        <Link className="brand" to="/">
          test-clean-dead-code
        </Link>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="app">
        <section className="card">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
