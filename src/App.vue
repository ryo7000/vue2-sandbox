<script lang="tsx">
import { defineComponent } from "@vue/composition-api";
import logo from "./assets/logo.png";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  setup(_props) {
    return () => (
      <div id="app">
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
