import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./src/pages/Home.vue";
import Transactions from "./src/pages/Transactions.vue";
import TransactionsDetail from "./src/pages/TransactionsDetail.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/transactions",
        component: Transactions,
    },
    {
        path: "/transactions/:id",
        component: TransactionsDetail,
    },
    {
        path: "/:pathMatch(.*)*",
        component: Transactions,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
