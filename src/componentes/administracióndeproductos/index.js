import React from "react";
import Formulario from "./formulario";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import swal from "sweetalert";
import App from "../../app";

const Administraciondeproductos = () => {
 const crearDatos = async (linkObjet) => {
  const docId = await addDoc(collection(db, "productos"), linkObjet);
  swal({
   title: "Todo listo",
   text: "Puedes continuar",
   buttons: "Continuar",
   icon: "success",
  });
 };

 return (
  <>
   <Formulario agregar={crearDatos} />
  </>
 );
};

export default Administraciondeproductos;
