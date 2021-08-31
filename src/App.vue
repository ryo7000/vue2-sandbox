<script lang="tsx">
import { defineComponent } from "@vue/composition-api";
import logo from "./assets/logo.png";
import { VApp, VMain, VDivider } from "vuetify/lib";
import HelloWorld from "./components/HelloWorld.vue";
import Buttons from "./components/Buttons.vue";
import Buttons2 from "./components/Buttons2";
import Buttons3 from "./components/Buttons3.vue";

export default defineComponent({
  name: "App",
  setup(_props) {
    return () => (
      <div id="app">
        <VApp>
          <VMain>
            <img alt="Vue logo" src={logo} />
            <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
            <VDivider class="ma-4" />
            <Buttons label="Button1" />
            <VDivider class="ma-4" />
            <Buttons2 label="Button2" />
            <VDivider class="ma-4" />
            <Buttons3 label="Button3" />
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
