<template>
  <div>
    <div class="h1 colored">template pattern</div>
    <v-row
      align="center"
      justify="space-around"
    >
      <v-btn depressed @click=onClick>
        {{ buttonLabel }}
      </v-btn>
      <v-btn
        depressed
        color="primary"
      >
        Primary
      </v-btn>
      <v-btn
        depressed
        color="error"
      >
        Error
      </v-btn>
      <v-btn
        depressed
        disabled
      >
        Disabled
      </v-btn>
    </v-row>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  name: "Buttons3",
  props: {
    label: String,
  },
  setup(props) {
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };
    const label = computed(() => `${props.label}-${count.value}`);

    // Use name like "buttonLabel" because "label" is same as props name.
    return {
      onClick,
      buttonLabel: label,
    };
  }
});
</script>

<style scoped>
.colored {
  color: red
}
</style>
