import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Formulario = (props) => {
 const initialStateValues = {
  sku: "",
  nombre: "",
  precio: "",
 };

 const [values, setValues] = useState(initialStateValues);

 const controlcambioInput = (e) => {
  const { name, value } = e.target;
  setValues({ ...values, [name]: value });
 };

 const enviar = (e) => {
  e.preventDefault();
  props.agregar(values);
 };

 return (
  <>
   <div className="formulario">
    <div className="container_form">
     <form className="form" onSubmit={enviar}>
      <div className="form-group">
       <input
        type="text"
        className="input form-control"
        placeholder="SKU"
        onChange={controlcambioInput}
        name="sku"
       />
       <input
        type="text"
        className="input form-control"
        placeholder="Precio"
        onChange={controlcambioInput}
        name="precio"
       />
       <div className="form-group">
        <textarea
         type="text"
         className="input form-control"
         placeholder="Nombre y/o descripcion"
         onChange={controlcambioInput}
         name="nombre"
        />
       </div>
      </div>
      <div className="container-btn-enviar">
       <button type="submit" className="btn-enviar">
        Agregar cosa
       </button>
      </div>
     </form>
    </div>
   </div>
  </>
 );
};

export default Formulario;
