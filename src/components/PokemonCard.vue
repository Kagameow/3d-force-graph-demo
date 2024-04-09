<script setup lang="ts">
import type { Pokemon } from '@/types';
import type { PropType } from 'vue';

defineProps({
  pokemonData: {
    type: Object as PropType<Pokemon>,
    required: false,
  },
});
</script>

<template>
  <div class="pokemon-card">
    <h2>Pokemon Card</h2>
    <p
      v-for="(property, key) in pokemonData"
      :key="key"
    >
      {{ key }}: {{ property }}
    </p>
  </div>
</template>

<style scoped>
.pokemon-card {
  border: green 2px solid;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 60px;
  left: 30px;
  max-width: 250px;
  background-color: #2c3e50;
}
</style>
