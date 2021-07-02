import React from "react";
import Navbar from "../Navbar";

export default function About() {
  return (
    <section data-index="0" className="container " id="about" data-source="about">
      <h1 className="title about-title"> o sushi </h1>

      <div className="about-content">
        <div className="column-1">
          <p>
            Sushi to japońska potrawa na którą składają się ryż, ryba
            (niekoniecznie surowa) lub warzywa. Podaje się je z sosem sojowym
            oraz wasabi. W naszym sushi barze w Wymyślonym serwujemy różne
            rodzaje sushi:
          </p>
          <li> hosomaki: jednoskładnikowe rolki ryżu zawinięte w nori</li>
          <li>
            futomaki: wieloskładnikowe, grube rolki ryżu zawinięte w nori
          </li>
          <li>nigiri: kuleczka ryżu pokryta rybą, lub warzywem. </li>
          <p>
            Naszą restauację pokochają fani zdrowego jedzenia. Oprócz wartości
            odżywczych, sushi jest niskokaloryczne.
          </p>
          <p className="kcal">
            <b>20 maki = 1 chesseburger = 550kcal!</b>
          </p>


        </div>
        <div className="column-2">
          <p>Etyka jedzenia sushi:</p>
          <li>jemy pałeczkami lub palcami</li>
          <li>maków nie można odgryzać- 1 mak= 1 kęs</li>
          <li>w sosie sojowym maczamy część z rybą- nie ryżem </li>
          <li>
            wasabi służy do oczyszczania kubków smakowych pomiędzy, sos sojowy
            służy do podkreślania smaku.
          </li>
          <p>
            Tutaj znajdziesz słowniczek, który pomoże Ci przy wyborze Twojej
            porcji:
          </p>
          <li> Ebi – krewetka </li>
          <li>Surimi – paluszki krabowe </li>
          <li>Sake – łosoś</li>
          <li> Unagi – węgorz</li>
          <li>Ninjin – marchewka</li>
          <li>Kappa – ogórek </li>
          <li> Tekka – tuńczyk</li>
        </div>
      </div>
    </section>
  );
}
