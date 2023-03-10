import React from "react";

export const Card = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" , backgroundColor:"crimson", borderRadius:"20px"}}>
        <br/>
      <h3> Resumen de información</h3>
      <h3>La canción registrada es: {data.titulo}</h3>
      <h3>El auto es : {data.autor}</h3>
      <h3>Su género musical es {data.genero}</h3>
      <br/>
    </div>
  );
};
