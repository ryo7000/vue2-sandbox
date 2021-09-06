<script lang="tsx">
import { defineComponent, ref, computed, reactive } from "@vue/composition-api";
import { VRow, VBtn } from "vuetify/lib";
import OptionalEmit from "./OptionalEmit.vue";
import OptionalModel from "./OptionalModel.vue";

export default defineComponent({
  name: "CompTsxSfcButton",
  props: {
    label: String,
  },
  setup(props) {
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };
    const label = computed(() => `${props.label}-${count.value}`);

    const modelCount = reactive({count: 0});

    return () => (
      <div>
        <VRow align="center" justify="space-around">
          <div class="h3 colored">Composition API with TSX+SFC pattern</div>
        </VRow>
        <VRow align="center" justify="space-around">
          <VBtn depressed onClick={onClick}>
            {label.value}
          </VBtn>
          <OptionalEmit onCustomEvent={(value: any) => console.log(value)} />
          {/*
            Can't use v-model with composition-api and jsx/tsx
            https://github.com/vuejs/jsx/issues/169
          */}
          <OptionalModel value={modelCount.count} onInput={(value: any) => modelCount.count = value} />
          <span>{modelCount.count}</span>
        </VRow>
      </div>
    );
  },
});
</script>

<style scoped>
.colored {
  color: red;
}
</style>
