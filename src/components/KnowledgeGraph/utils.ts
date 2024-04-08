import type { Pokemon, PokemonNode } from '@/types';

export const extractPokemonData = (node: PokemonNode): Pokemon => {
  const {
    id,
    name,
    Type1,
    Type2,
    HP,
    Attack,
    Defense,
    SpAtk,
    SpDef,
    Speed,
    Generation,
    Legendary,
  } = node;
  return {
    id,
    name,
    Type1,
    Type2,
    HP,
    Attack,
    Defense,
    SpAtk,
    SpDef,
    Speed,
    Generation,
    Legendary,
  };
};

export const typeColorsMap = {
  Bug: '#A8B820',
  Dark: '#705848',
  Dragon: '#7038F8',
  Electric: '#F8D030',
  Fairy: '#EE99AC',
  Fighting: '#C03028',
  Fire: '#F08030',
  Flying: '#A890F0',
  Ghost: '#705898',
  Grass: '#78C850',
  Ground: '#E0C068',
  Ice: '#98D8D8',
  Normal: '#A8A878',
  Poison: '#A040A0',
  Psychic: '#F85888',
  Rock: '#B8A038',
  Steel: '#B8B8D0',
  Water: '#6890F0',
} as const;
