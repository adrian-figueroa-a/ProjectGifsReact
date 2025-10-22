// import React from "react";
interface props {
  placeholder?: string;
}
export const SearchBar = ({ placeholder = "Buscar" }: props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>Buscar</button>
    </div>
  );
};
