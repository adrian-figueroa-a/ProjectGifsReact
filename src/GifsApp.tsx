import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs-mock";
import { SearchBar } from "./shared/components/SearchBar";
import { Customheader } from "./shared/components/CustomHeader";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setpreviousTerms([query, ...previousTerms].splice(0.7));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return (
    <>
      {/* header */}
      <Customheader
        title={"Buscador de Gifs"}
        description="Descubre los mejores Gifs"
      ></Customheader>

      {/* search */}
      <SearchBar placeholder="Buscar Gifs" onQuery={handleSearch}></SearchBar>

      {/* busqueda anteriores */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      ></PreviousSearches>

      {/* gifs */}
      <GifList gifs={gifs}></GifList>
    </>
  );
};
