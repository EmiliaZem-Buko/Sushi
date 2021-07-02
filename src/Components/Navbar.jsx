import React from "react";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img className="nav-img" src="img/sushi.jpg"></img>
      <a href="#about"><h1 className="logo">Sushi Kushi</h1></a>
      <div className="nav-nav">
        <a data-page="about" className="navigation" href="#about">
          o sushi
        </a>
        <a data-page="menu" className="navigation" href="#menu">
          menu
        </a>
        <a data-page="delivery" className="navigation" href="#delivery">
          dostawa
        </a>
        <a data-page="reserve" className="navigation" href="#reserve">
          rezerwacja
        </a>
      </div>
      <div className="con-con">
        <div>
          <img className="nav-icon1" src="img/pin.svg" alt="" />
          <p className="nav-data1"> Rynek 4, Wymyślone</p>
        </div>
        <div>
          <img className="nav-icon2" src="img/smartphone.svg" alt="" />
          <p className="nav-data2">123456789</p>
        </div>
        <div className="bubble"></div>
      </div>
    </div>
  );
}
