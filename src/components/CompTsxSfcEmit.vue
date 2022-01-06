<script lang="tsx">
import { defineComponent } from "@vue/composition-api";
import { VBtn } from "vuetify/lib";

export default defineComponent({
  name: "CompTsxSfcEmit",
  emits: ["click"],
  setup(props, context) {
    return () => (
      <VBtn depressed color="primary" onClick={() => context.emit("click")}>
        EMIT
      </VBtn>
    );
  },
});
</script>
