import React from "react"
import About from "./About/About"
import MenuProps from "./Menu/MenuProps"
import Delivery from "./Delivery/Delivery"
import Reserve from "./Reserve/Reserve"
import Footter from "./Footter"


export default function Content(){
return(
  <div className="content">
    <About />
    <MenuProps />
    <Delivery />
    <Reserve />
    <Footter />
  </div>
)
}