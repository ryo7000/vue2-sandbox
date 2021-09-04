<script lang="tsx">
import { defineComponent, onUpdated } from "@vue/composition-api";
import { VBtn, VIcon, VTooltip } from "vuetify/lib";

export default defineComponent({
  name: "Child",
  props: {
    obj: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    onUpdated(() => {
      console.log("[onUpdated] Child. %o", props.obj);
    });

    return () => (
      <div>
        {`${props.obj}`}
        <VTooltip
          bottom
          scopedSlots={{
            activator: ({ on }: { on: any }) => (
              <VBtn>
                <VIcon small>stop</VIcon>
                ABC
              </VBtn>
            ),
          }}
        >
          <span>Button</span>
        </VTooltip>
      </div>
    );
  },
});
</script>
