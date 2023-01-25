import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faUserSecret,
    faPaperPlane,
    faPhone,
    faTrash,
    faPenToSquare,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import MainLayout from "./Layouts/MainLayout.vue";
import { InertiaProgress } from "@inertiajs/progress";
import "../css/app.css";
import { ZiggyVue } from "ziggy";

library.add(
    faUserSecret,
    faPaperPlane,
    faPhone,
    faTrash,
    faPenToSquare,
    faLocationDot
);
library.add(faTwitter);

InertiaProgress.init({
    delay: 0,
    color: "#29d",
    includeCSS: true,
    showSpinner: true,
});

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue");

        const page = await pages[`./Pages/${name}.vue`]();
        page.default.layout = page.default.layout || MainLayout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .component("font-awesome-icon", FontAwesomeIcon)
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
});
