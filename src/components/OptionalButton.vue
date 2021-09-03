<template>
  <div>
    <v-row align="center" justify="space-around">
      <div class="h3 colored">Optional API</div>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-btn depressed @click="onClick">
        {{ buttonLabel }}
      </v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OptionalButton",
  props: {
    label: String,
  },
  data: function () {
    return {
      count: 0,
    };
  },
  computed: {
    buttonLabel: function () {
      return `${this.label}-${this.count}`;
    },
  },
  methods: {
    onClick: function () {
      this.count++;
    },
  },
});
</script>

<style scoped>
.colored {
  color: red;
}
</style>
