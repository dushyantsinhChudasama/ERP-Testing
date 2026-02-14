import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="sidebar-breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        <li
          className={`breadcrumb-item ${pathnames.length === 0 ? "active" : ""}`}
        >
          {pathnames.length === 0 ? (
            <span>Dashboard</span>
          ) : (
            <Link to="/">Dashboard</Link>
          )}
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <li
              key={to}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
            >
              {isLast ? <span>{label}</span> : <Link to={to}>{label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
