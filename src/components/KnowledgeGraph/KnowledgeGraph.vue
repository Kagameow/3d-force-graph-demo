<script setup lang="ts">
import ForceGraph3D from '3d-force-graph';
import { onMounted, ref } from 'vue';
import type { Pokemon, PokemonNode } from '@/types';
import { extractPokemonData } from '@/components/KnowledgeGraph/utils';
// import { default as graphData } from '../datasets/test-data';

const emit = defineEmits({
  nodeClick: (node: Pokemon) => {
    return node;
  },
});
const graphEl = ref<HTMLElement | null>(null);
type PokemonKeys = keyof Pokemon;

const filterNonPokemonKeys = (node: { [key: string]: any }): Pokemon => {
  const pokemonKeys = Object.keys(node).filter<PokemonKeys>(
    (key): key is PokemonKeys => key in node,
  );
  return pokemonKeys.reduce<Pokemon>((acc, key) => {
    acc[key] = node[key];
    return acc;
  }, {} as Pokemon);
};

onMounted(() => {
  const graph = ForceGraph3D();
  if (!graphEl.value) {
    return;
  }
  graph(graphEl.value)
    .height(document.documentElement.clientHeight - 20)
    .linkWidth(1.5)
    .onNodeClick((node: { [key: string]: any } | PokemonNode) => {
      const pokemon = extractPokemonData(node as PokemonNode);
      emit('nodeClick', pokemon);
    })
    .jsonUrl('src/datasets/pokemon.json');
});
</script>

<template>
  <div ref="graphEl" />
</template>

<style scoped></style>
