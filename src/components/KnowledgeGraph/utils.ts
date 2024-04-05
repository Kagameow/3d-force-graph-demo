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
