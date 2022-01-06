<script lang="tsx">
import { defineComponent, ref, computed, reactive } from "@vue/composition-api";
import { VRow, VCol, VBtn, VSwitch, VTooltip } from "vuetify/lib";
import OptionalEmit from "./OptionalEmit.vue";
import OptionalModel from "./OptionalModel.vue";
import CompTsxSfcEmit from "./CompTsxSfcEmit.vue";

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

    const modelCount = reactive({ count: 0 });

    const flag = ref(false);

    return () => (
      <div>
        <VRow align="center" justify="space-around">
          <div class="h3 colored">Composition API with TSX+SFC pattern</div>
        </VRow>
        <VRow align="center" justify="space-around">
          <VCol>
            {/*
              Use scopedSlots
            */}
            <VTooltip
              bottom
              scopedSlots={{
                activator: ({ on, attrs }: any) => (
                  <VBtn depressed onClick={onClick} {...{ on }} {...{ attrs }}>
                    {label.value}
                  </VBtn>
                ),
              }}
            >
              <span>Tooltip</span>
            </VTooltip>
          </VCol>
          <VCol>
            <OptionalEmit onCustomEvent={(value: any) => console.log(value)} />
          </VCol>
          <VCol>
            <CompTsxSfcEmit onClick={() => console.log("clicked")} />
          </VCol>
          <VCol>
            {/*
              Can't use v-model with composition-api and jsx/tsx
              https://github.com/vuejs/jsx/issues/169
            */}
            <OptionalModel
              value={modelCount.count}
              onInput={(value: any) => (modelCount.count = value)}
            />
          </VCol>
          <VCol>
            {/*
              model attribute pattern
              https://github.com/vuejs/jsx/blob/5368c63ec768c070cfc259a506d9de43cb930bdb/packages/babel-sugar-v-model/test/snapshot.js#L27-L36
            */}
            <OptionalModel
              model={{
                value: modelCount.count,
                callback: (value: any) => (modelCount.count = value),
              }}
            />
          </VCol>
          <VCol>
            <span>{modelCount.count}</span>
          </VCol>
          <VCol>
            {/*
              Use named slots
            */}
            <VSwitch value={flag.value} onInput={(v: any) => (flag.value = v)}>
              <template slot="label">
                <span>GHQ</span>
              </template>
            </VSwitch>
          </VCol>
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
