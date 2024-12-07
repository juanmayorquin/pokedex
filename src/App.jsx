import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { fetchPokemonList } from "./services/fetchPokemonList";
import { fetchPokemon } from "./services/fetchPokemon";

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

function App() {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList().then((data) => {
      const pokemonNamesList = data.results;

      pokemonNamesList.map((pokemon) => {
        fetchPokemon(pokemon.name).then((pokemonInfo) => {
          setPokemonList((prevPokemonList) => {
            return [...prevPokemonList, pokemonInfo];
          });
        });
      });
    });
  }, []);

  return (
    <>
      <SearchBar setPokemonData={setPokemonData} />
      <div className="grid grid-cols-5 place-items-center gap-5 max-w-6xl m-auto mt-10">
        {pokemonData.sprites ? (
          <Card
            imgUrl={pokemonData.sprites.front_default}
            name={capitalize(pokemonData.forms[0].name)}
            id={pokemonData.id}
            types={pokemonData.types}
          />
        ) : pokemonList.length > 0 ? (
          pokemonList.map((pokemonData, index) => (
            <Card
              key={index}
              imgUrl={pokemonData.sprites.front_default}
              name={capitalize(pokemonData.forms[0].name)}
              id={pokemonData.id}
              types={pokemonData.types}
            />
          ))
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
