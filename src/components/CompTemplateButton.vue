<template>
  <div>
    <v-row align="center" justify="space-around">
      <div class="h3 colored">Composition API with template pattern</div>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-btn depressed @click="onClick">
        {{ buttonLabel }}
      </v-btn>
      <OptionalEmit @customEvent="onClickEvent" />
      <OptionalModel v-model="modelCount" />
      <span>{{ modelCount }}</span>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from "@vue/composition-api";
import OptionalEmit from "./OptionalEmit.vue";
import OptionalModel from "./OptionalModel.vue";

export default defineComponent({
  name: "CompTemplateButton",
  components: {
    OptionalEmit,
    OptionalModel,
  },
  props: {
    label: String,
  },
  setup(props) {
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };
    const label = computed(() => `${props.label}-${count.value}`);

    const onClickEvent = (value: any) => {
      console.log(value);
    };

    const modelCount = reactive({count: 0});

    // Use name like "buttonLabel" because "label" is same as props name.
    return {
      onClick,
      onClickEvent,
      buttonLabel: label,
      modelCount: modelCount.count,
    };
  },
});
</script>

<style scoped>
.colored {
  color: red;
}
</style>
