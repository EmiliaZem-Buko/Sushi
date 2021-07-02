import React from "react";

export default function Delivery() {
  return (
    <section data-index="2" className="container" id="delivery" data-source="delivery">
        <h1 className="title del">
            Dostawa
        </h1>
      <div className="delivery">
        <h2>
          Zadzwoń: 234567890
        </h2>
        <p>lub</p>
        <h2>Zamów przez:</h2>
       <a href="https://www.pyszne.pl/"> <img className="pyszne" src="img/py.png" alt=""/></a>
      </div>

    </section>
  );
}