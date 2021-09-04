<script lang="tsx">
import { defineComponent, ref, reactive, computed, onUpdated } from "@vue/composition-api";
import { VRow, VBtn } from "vuetify/lib";
import ChildOption from "./ChildOption.vue";

export default defineComponent({
  name: "CompTsxSfcButton",
  props: {
    label: String,
  },
  setup(props) {
    onUpdated(() => {
      console.log('[onUpdated] CompTsxSfcButton');
    });

    const count = ref(0);
    const onClick = () => {
      count.value++;
    };
    const label = computed(() => `${props.label}-${count.value}`);

    const obj = reactive({ count: 0, flag: false });

    return () => (
      <div>
        <VRow align="center" justify="space-around">
          <div class="h3 colored">Composition API with TSX+SFC pattern</div>
        </VRow>
        <VRow align="center" justify="space-around">
          <VBtn depressed onClick={onClick}>
            {label.value}
          </VBtn>

          <VBtn depressed onClick={() => obj.count++}>
            INCREMENT
          </VBtn>

          <VBtn depressed onClick={() => (obj.flag = !obj.flag)}>
            TOGGLE
          </VBtn>
          <ChildOption obj={obj.count} />
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
