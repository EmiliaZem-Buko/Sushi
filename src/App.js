import "./styles.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Burger from "./Components/Burger"
import Media from "react-media";

export default function App() {
  return (
    <div className="App">
      <Media query="(max-width: 1000px)">
        {(matches) => {
          return matches ? <Burger /> : <Navbar />;
        }}
      </Media>
      <Content />
    </div>
  );
}
