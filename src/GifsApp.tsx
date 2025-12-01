import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs-mock";
import { SearchBar } from "./shared/components/SearchBar";
import { Customheader } from "./shared/components/CustomHeader";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs();
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
