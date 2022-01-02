import React from "react";
import ReactDOM from "react-dom";
import Administraciondeproductos from "./componentes/administracióndeproductos/index";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componentes/header/header";
import Footer from "./componentes/footer.js/footer";

ReactDOM.render(
 <React.StrictMode>
  <Header />
  <Administraciondeproductos />
  <Footer />
 </React.StrictMode>,
 document.getElementById("root")
);
