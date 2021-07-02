import React from "react";

export default function Footter(){

  var date = new Date();
  var year = date.getFullYear();

  return( <div className="footer"> 
<p className="one">Wymyślone rynek 4,Sushi Ksusi bar</p> 
<p className="copy">&copy; {year} by WebHunter</p>
<p className="two">Najlpesze Sushi w mieście. Zawsze świerze z najlepszych składników.</p> 
  </div> )
}