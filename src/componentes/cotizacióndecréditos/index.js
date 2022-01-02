import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

useEffect(() => {
 const obtenerDatos = async () => {
  const datos = await getDocs(collection(db, "administracionDeplazos"));
  datos.forEach((documento) => console.log(documento.data()));
 };
 obtenerDatos();
}, []);
return <h1>document</h1>;
