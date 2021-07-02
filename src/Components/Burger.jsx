import React from "react";

export default function Burger() {
  const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.3}s`;
      }
    });

    burger.classList.toggle("toggle");
  };

  return (
    <nav>


      <div className="Blogo">Sushi Kushi</div>
      <ul className="nav-links">
        <li>
          <a href="#about">o sushi</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#delivery">Dostawa</a>
        </li>
        <li>
          <a href="#reserve">Rezerwacja</a>
        </li>
      </ul>

      <div className="burger" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
