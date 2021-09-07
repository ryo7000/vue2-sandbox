<script lang="tsx">
import { defineComponent, ref, computed, reactive } from "@vue/composition-api";
import { VRow, VBtn, VSwitch, VTooltip } from "vuetify/lib";
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

    const flag = ref(false);

    return () => (
      <div>
        <VRow align="center" justify="space-around">
          <div class="h3 colored">Composition API with TSX+SFC pattern</div>
        </VRow>
        <VRow align="center" justify="space-around">
          {/*
            Use scopedSlots
          */}
          <VTooltip bottom scopedSlots={{
            activator: ({on, attrs}: any) => (
              <VBtn depressed onClick={onClick} {...{ on }} {...{ attrs }}>
                {label.value}
              </VBtn>
            )
          }}
          >
            <span>Tooltip</span>
          </VTooltip>
          <OptionalEmit onCustomEvent={(value: any) => console.log(value)} />
          {/*
            Can't use v-model with composition-api and jsx/tsx
            https://github.com/vuejs/jsx/issues/169
          */}
          <OptionalModel value={modelCount.count} onInput={(value: any) => modelCount.count = value} />
          <span>{modelCount.count}</span>
          {/*
            Use named slots
          */}
          <VSwitch value={flag.value} onInput={(v: any) => flag.value = v}>
            <template slot="label">
              <span>GHQ</span>
            </template>
          </VSwitch>
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
