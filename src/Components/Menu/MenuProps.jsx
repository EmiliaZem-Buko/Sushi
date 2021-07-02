import React, { useState } from "react";
import MenuShow from "./MenuShow";
import menuContent from "./menuConent";
import NavMenu from "./NavMenu";

export default function MenuProps(props) {
  const [active, setActive] = useState("Nigiri");

  return (
    <section data-index="1" className="container" id="menu" data-source="menu">
      <div className="menu-header">
        <h1 className="title">Menu</h1>
        <NavMenu setActive={setActive} active={active} />
      </div>
      {/* {oneList.map(menuGenerate)} */}
      {active === "Nigiri" && (
        <MenuShow
          content={menuContent[0]}
        />
      )}
      {active === "Hosomaki" && (
        <MenuShow
          content={menuContent[1]}
        />
      )}
      {active === "Futomaki" && (
        <MenuShow
          content={menuContent[2]}
        />
      )}
      {active === "Zestawy" && (
        <MenuShow
          content={menuContent[3]}
        />
      )}
      {active === "Zupy" && (
        <MenuShow
          content={menuContent[4]}
        />
      )}
      {active === "Napoje" && (
        <MenuShow
          content={menuContent[5]}
        />
      )}
    </section>
  );
}
