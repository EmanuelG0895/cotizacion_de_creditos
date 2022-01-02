import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

const App = () => {
 useEffect(() => {
  const obtenerDatos = async () => {
   const datos = await getDocs(collection(db, "productos"));
   datos.forEach((documento) => console.log(documento.data()));
  };
  obtenerDatos();
 }, []);
};
export default App;
