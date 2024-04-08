<script setup lang="ts">
import ForceGraph3D from '3d-force-graph';
import { onMounted, ref } from 'vue';
import type { Pokemon, PokemonNode, PokemonTypeNode } from '@/types';
import { extractPokemonData, typeColorsMap } from '@/components/KnowledgeGraph/utils';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const emit = defineEmits({
  nodeClick: (node: Pokemon) => {
    return node;
  },
});
const graphEl = ref<HTMLElement | null>(null);
// @ts-ignore
const bloomPass = new UnrealBloomPass(undefined, 1, 1, 0);

onMounted(() => {
  const graph = ForceGraph3D();
  if (!graphEl.value) {
    return;
  }
  graph(graphEl.value)
    .height(document.documentElement.clientHeight - 20)
    .backgroundColor('#000003')
    .nodeColor((node): string => {
      const pokemonNodeType = (node as PokemonNode).Type1;
      const isPokemonNode = pokemonNodeType in typeColorsMap;
      if (isPokemonNode) {
        return typeColorsMap[pokemonNodeType as keyof typeof typeColorsMap];
      }
      const typeNodeName = (node as PokemonTypeNode).name;
      return typeColorsMap[typeNodeName as keyof typeof typeColorsMap];
    })
    .onNodeClick((node) => {
      const pokemon = extractPokemonData(node as PokemonNode);
      emit('nodeClick', pokemon);
    })
    .jsonUrl('src/datasets/pokemon.json')
    .postProcessingComposer()
    .addPass(bloomPass);
});
</script>

<template>
  <div ref="graphEl" />
</template>

<style scoped></style>
