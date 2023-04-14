import React from "react";
import { Outlet, Link } from "react-router-dom";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export default function Home({ changePage }) {
  return (
    <div className="App">
      <h1>Welcome to my website</h1>
      <h4>Pages:</h4>
      <Link style={styles.link} to={'/expense'}>
        Expenses
      </Link>
      <Link style={styles.link} to={'/gallery'}>
        Gallery
      </Link>
      <Link style={styles.link} to={'/about'}>
        About
      </Link>
    </div>
  );
}