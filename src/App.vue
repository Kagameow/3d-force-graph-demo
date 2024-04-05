<script setup lang="ts">
import KnowledgeGraph from '@/components/KnowledgeGraph/KnowledgeGraph.vue';
import PokemonCard from '@/components/PokemonCard.vue';
import { ref } from 'vue';
import type { Pokemon } from '@/types';

const pokemonData = ref<Pokemon | null>(null);

const handleNodeClick = (pokemon: Pokemon) => {
  pokemonData.value = pokemon;
};
</script>

<template>
  <header>I'm header</header>
  <main>
    <KnowledgeGraph @node-click="handleNodeClick" />
    <PokemonCard
      v-if="pokemonData"
      :pokemon-data="pokemonData"
    />
  </main>
</template>

<style scoped></style>
