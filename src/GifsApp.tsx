// import React from "react";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs-mock";
import { SearchBar } from "./shared/components/SearchBar";
import { Customheader } from "./shared/components/CustomHeader";
import { GifList } from "./gifs/components/GifList";

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
      <PreviousSearches
        searches={["gato", "perro", "cocodrilo"]}
      ></PreviousSearches>

      {/* gifs */}
      <GifList gifs={mockGifs}></GifList>
    </>
  );
};
