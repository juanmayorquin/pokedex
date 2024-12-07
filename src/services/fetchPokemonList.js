export const fetchPokemonList = () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon`).then((res) =>
      res.json()
    );
  };
  