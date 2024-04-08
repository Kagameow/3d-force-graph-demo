export type Pokemon = {
  id: number;
  name: string;
  Type1: string;
  Type2: string;
  HP: number;
  Attack: number;
  Defense: number;
  SpAtk: number;
  SpDef: number;
  Speed: number;
  Generation: number;
  Legendary: boolean;
};

export type PokemonNode = Pokemon & {
  [key: string]: any;
};

export type PokemonType = {
  id: string;
  name: string;
  val: number;
};

export type PokemonTypeNode = PokemonType & {
  [key: string]: any;
};
