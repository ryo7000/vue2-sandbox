<script lang="tsx">
import { defineComponent } from "vue";
import logo from "./assets/logo.png";
import { VApp, VMain, VDivider } from "vuetify/lib";
import CompTsxSfcButton from "./components/CompTsxSfcButton.vue";
import CompTsxOnlyButton from "./components/CompTsxOnlyButton";
import CompTemplateButton from "./components/CompTemplateButton.vue";
import OptionalButton from "./components/OptionalButton.vue";

export default defineComponent({
  name: "App",
  setup(_props) {

    return () => (
      <div id="app">
        <VApp>
          <VMain>
            <img alt="Vue logo" src={logo} />
            <VDivider class="ma-4" />
            <CompTsxSfcButton label="Button1" />
            <VDivider class="ma-4" />
            <CompTsxOnlyButton label="Button2" />
            <VDivider class="ma-4" />
            <CompTemplateButton label="Button3" />
            <VDivider class="ma-4" />
            <OptionalButton label="Button4" />
          </VMain>
        </VApp>
      </div>
    );
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
