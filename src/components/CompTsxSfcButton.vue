<script lang="tsx">
import { defineComponent, ref, computed } from "@vue/composition-api";
import { VRow, VBtn } from "vuetify/lib";

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

    return () => (
      <div>
        <VRow align="center" justify="space-around">
          <div class="h3 colored">Composition API with TSX+SFC pattern</div>
        </VRow>
        <VRow align="center" justify="space-around">
          <VBtn depressed onClick={onClick}>
            {label.value}
          </VBtn>
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
