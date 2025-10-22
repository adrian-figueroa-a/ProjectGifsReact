// import React from "react";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs-mock";
import { SearchBar } from "./shared/components/SearchBar";
import { Customheader } from "./shared/components/CustomHeader";

export const GifsApp = () => {
  return (
    <>
      {/* header */}
      <Customheader
        title={"Buscador de Gifs"}
        description="Descubre los mejores Gifs"
      ></Customheader>

      {/* search */}
      <SearchBar placeholder="Buscar Gifs"></SearchBar>

      {/* busqueda anteriores */}
      <PreviousSearches></PreviousSearches>

      {/* gifs */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} ( 1.5mb )
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
