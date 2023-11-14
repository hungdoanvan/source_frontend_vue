import "@/styles/element-ui/index.scss";
import "element-plus/dist/index.css";

import elementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";
import { router, store } from "./configs";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(elementPlus);

app.mount("#app");
