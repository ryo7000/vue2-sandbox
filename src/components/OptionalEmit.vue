<template>
  <v-btn depressed @click="onClick">
    EMIT
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OptionalEmit",
  props: {
    label: String,
  },
  methods: {
    onClick: function (e: any) {
      this.$emit('customEvent', e);
    },
  },
});
</script>
