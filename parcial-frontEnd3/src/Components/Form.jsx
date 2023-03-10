import React from "react";
import { Card } from "./Card";
import { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({
    titulo: "",
    autor: "",
    genero: "",
  });

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChangeInput = (e, propiedad) => {
    setData({ ...data, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tituloIsValid = data.titulo.length > 2;
    const tituloSpaces = data.titulo.startsWith(" ");
    const autorIsValid = data.autor.length > 5;

    if (!tituloIsValid || !autorIsValid || tituloSpaces) {
      setError(true);
      if (!tituloIsValid && !autorIsValid) {
        setErrorMsg("El titulo y el autor son incorrectos");
      } else if (!tituloIsValid || tituloSpaces) {
        if (tituloSpaces) {
          setErrorMsg("El titulo contiene espacio al inicio");
        } else if (!tituloIsValid) {
          setErrorMsg("El titulo tiene menos de 3 caracteres");
        }
      } else if (!autorIsValid) {
        setErrorMsg("El autor tiene menos de 6 caracteres");
      }
    } else {
      setError(false);
      setErrorMsg("");
      setIsValid(true);
    }
    // realizamos envio de información a card

    if (isValid && !error) console.log("Musica: ", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="">
          Título canción
          <br />
          <input
            type="text"
            placeholder="Ingresa título canción"
            onChange={(e) => handleChangeInput(e, "titulo")}
          />
        </label>
        <label htmlFor="">
          Autor de la canción
          <br />
          <input
            type="text"
            placeholder="Ingresa autor canción"
            onChange={(e) => handleChangeInput(e, "autor")}
          />
        </label>
        <br />
        <select
          value={data.genero}
          name=""
          id=""
          onChange={(e) => handleChangeInput(e, "genero")}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="urbano">Urbano</option>
          <option value="popular">Popular</option>
          <option value="rock">Rock</option>
        </select>
        <br />
        <button type="submit">Registrar información</button>
      </form>
      {error && <span style={{ color: "red" }}>{errorMsg}</span>}
      {isValid && <Card data={data} />}
    </div>
  );
};
