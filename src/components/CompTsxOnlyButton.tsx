import {defineComponent, ref, computed} from "vue";
import {VRow, VBtn} from "vuetify/lib";

export default defineComponent({
  name: "CompTsxOnlyButton",
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
        <VRow align="center" justify="space-around">
          <div class="h3" style="color: red">
            Composition API with TSX only pattern
          </div>
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
