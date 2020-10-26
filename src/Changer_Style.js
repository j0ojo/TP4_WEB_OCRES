import React from "react";
import ReactDOM from 'react-dom'


function Changer_Style()
{
  var a = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var c = Math.floor(Math.random()*256);
  var bCouleur = "rgb("+a+","+b+ "," + c+")";
  document.body.style.infos = bCouleur;
}
export default Changer_Style;