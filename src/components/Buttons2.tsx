import { defineComponent, ref, computed } from "@vue/composition-api";
import { VRow, VBtn } from "vuetify/lib";

export default defineComponent({
  name: "Buttons2",
  props: {
    label: String,
  },
  setup(props) {
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };
    const label = computed(() => `${props.label}-${count.value}`);

    // Can't use local css class like vue scoped css
    return () => (
      <div>
        <div class="h1" style="color: red">TSX only pattern</div>
        <VRow
          align="center"
          justify="space-around"
        >
          <VBtn depressed onClick={onClick}>
            { label.value }
          </VBtn>
          <VBtn
            depressed
            color="primary"
          >
            Primary
          </VBtn>
          <VBtn
            depressed
            color="error"
          >
            Error
          </VBtn>
          <VBtn
            depressed
            disabled
          >
            Disabled
          </VBtn>
        </VRow>
      </div>
    );
  }
});
