import React from "react";
import menuConent from "./menuConent";

export default function NavMenu(props) {
  function hendleClick(e) {
    props.setActive(e.target.name);
  }

  return (
    <div>
      <ul>
        <button onClick={hendleClick} className={`nav-menu ${(props.active === "Nigiri") ? "un-ni":""}`} name="Nigiri">
         Nigiri
        </button>
        <button onClick={hendleClick} className={`nav-menu ${(props.active === "Hosomaki") ? "un-ni":""}`} name="Hosomaki">
          Hosomaki
        </button>
        <button onClick={hendleClick} className={`nav-menu ${(props.active === "Futomaki") ? "un-ni":""}`}  name="Futomaki">
          Futomaki
        </button>
        <button onClick={hendleClick} className={`nav-menu ${(props.active === "Zestawy") ? "un-ni":""}`} name="Zestawy">Zestawy</button>
        <button onClick={hendleClick} className={`nav-menu ${(props.active === "Zupy") ? "un-ni":""}`}  name="Zupy">Zupy</button>
        <button onClick={hendleClick} className={`nav-menu ${(props.active === "Napoje") ? "un-ni":""}`}  name="Napoje">Napoje</button>
      </ul>
    </div>
  );
}
