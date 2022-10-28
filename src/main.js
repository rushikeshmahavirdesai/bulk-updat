import { createApp } from "vue";
import App from "./App.vue";
import { VueCsvImportPlugin } from "vue-csv-import";
import "./assets/main.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
createApp(App).use(VueCsvImportPlugin).use(ElementPlus).mount("#app");
