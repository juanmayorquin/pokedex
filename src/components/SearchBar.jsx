import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { fetchPokemon } from "../services/fetchPokemon";

const SearchBar = ({ setPokemonData }) => {
  const searchRef = useRef();

  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    if (pokemonName != "") {
      fetchPokemon(pokemonName)
        .then((data) => {
          setPokemonData(data);
        })
        .catch(() => {
          setPokemonData({});
        });
    }
  }, [pokemonName]);

  const handleSearch = (e) => {
    e.preventDefault();
    const name = searchRef.current.value;
    setPokemonName(name.toLowerCase());
  };
  return (
    <div className="bg-[#313131] h-48 grid place-items-center text-white">
      <div className="flex gap-8 m-auto w-2/3">
        <form autoComplete="off" className="flex flex-col gap-2" onSubmit={handleSearch}>
          <label htmlFor="pokemon-search-bar" className="text-3xl font-light">
            Nombre o número
          </label>
          <div className="h-12 flex gap-4">
            <input
              id="pokemon-search-bar"
              className="h-full border-[3px] border-neutral-500 focus:outline-none focus:border-orange-500 transition-all focus:drop-shadow text-neutral-800 w-80 p-3 rounded"
              type="text"
              ref={searchRef}
            />
            <button className="bg-orange-500 h-full w-14 rounded hover:bg-red-500 transition-all duration-300 grid place-items-center">
              {<Search />}
            </button>
          </div>
        </form>

        <div className="bg-green-500 p-4 rounded">
          <h2 className="text-xl">
            Busca un Pokémon por su nombre o usando su número de la Pokédex
            Nacional.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
