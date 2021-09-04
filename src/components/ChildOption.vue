<template>
  <div>
    <VBtn>
      <VIcon small>stop</VIcon>
      {{ obj }}
    </VBtn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ChildOption",
  props: {
    obj: Number,
  },
});
</script>

<style scoped>
.colored {
  color: red;
}
</style>
