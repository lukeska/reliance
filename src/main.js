import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Icon from "./components/Icon.vue";
import SecondaryCTA from "./components/SecondaryCTA.vue";

const app = createApp(App);

app.component("Icon", Icon).component("SecondaryCTA", SecondaryCTA);

app.mount("#app");
