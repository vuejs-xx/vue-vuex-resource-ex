<template>
    <div>
      <button @click="increasement">INCREASEMENT</button>
      <button @click="decreasement">DECREASEMENT</button>
      <button @click="fetchPosts">FETCH</button>
      <span>{{ count }}</span>
      <span>{{ infos }}</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'count',
    'limit',
    'infos',
  ]),
  methods: mapActions([
    'increasement',
    'fetchPosts',
    'decreasement',
  ]),
};

</script>
