import React from "react";

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
      <li style={styles.link} onClick={() => changePage()}>
        Apple Page
      </li>
      <li style={styles.link} onClick={() => changePage()}>
        Cat Page
      </li>
    </div>
  );
}