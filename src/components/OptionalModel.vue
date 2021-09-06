<template>
  <v-btn depressed @click="onClick">
    INCREMENT
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OptionalModel",
  props: {
    value: Number,
  },
  methods: {
    onClick: function () {
      this.$emit('input', this.value + 1);
    },
  },
});
</script>

