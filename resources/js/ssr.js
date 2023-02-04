import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faUserSecret,
    faPaperPlane,
    faPhone,
    faTrash,
    faPenToSquare,
    faLocationDot,
    faHouse,
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
    faLocationDot,
    faHouse
);
library.add(faTwitter);

InertiaProgress.init({
    delay: 0,
    color: "#29d",
    includeCSS: true,
    showSpinner: true,
});

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
            const page = pages[`./Pages/${name}.vue`];
            page.default.layout = page.default.layout || MainLayout;
            return page;
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            })
                .component("font-awesome-icon", FontAwesomeIcon)
                .use(plugin)
                .use(ZiggyVue);
        },
    })
);
