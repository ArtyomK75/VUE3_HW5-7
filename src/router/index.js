import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AdminPage from '../components/AdminPage.vue';
import AuthPage from '../components/AuthPage.vue';
import NotFoundPage from '../components/NotFoundPage.vue';
import LoginPage from '../components/LoginPage.vue';
import UserPage from '../components/UserPage.vue';
import ParentPage from '../components/ParentPage.vue';
import ChildPage from '../components/ChildPage.vue';
import ValidatedPage from '../components/ValidatedForm.vue';
import UsingCounter from '../components/UsingCounter.vue';
import UsingToggle from '../components/UsingToggle.vue';
import DualLinksElements from '../components/DualLinksElements.vue';
import SelectComponent from '../components/SelectComponent.vue';
import Products from '../components/Products.vue';
import BaseSlot from "../components/BaseSlot.vue";
import HomePageWithNamedSlots from "@/components/HomePageWithNamedSlots.vue";
import HomePageWithScopedSlots from "@/components/HomePageWithScopedSlots.vue";
import HomePageWithBaseMixin from "@/components/HomePageWithBaseMixin.vue";
import HomePageWithDirectives from "@/components/HomePageWithDirectives.vue";

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {requiresAuth: false}
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage,
        meta: { requiresAuth: true, isAdmin: true }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: AuthPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/notFound',
        name: 'NotFound',
        component: NotFoundPage
    },
    {
        path: '/user/:userId',
        name: 'User',
        props: true,
        component: UserPage
    },
    {
        path: '/parent',
        name: 'Parent',
        component: ParentPage,
        children: [
            {
                path: 'child',
                name: 'Child',
                component: ChildPage,
            }
        ]
    },
    {
        path: '/validated',
        name: 'ValidatedForm',
        component: ValidatedPage
    },
    {
        path: '/dual-links-elements',
        name: 'DualLinksElements',
        component: DualLinksElements
    },
    {
        path: '/counter',
        name: 'UsingCounter',
        component: UsingCounter
    },
    {
        path: '/toggle',
        name: 'UsingToggle',
        component: UsingToggle
    },
    {
        path: '/select-option',
        name: 'SelectOption',
        component: SelectComponent
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/base-slot',
        name: 'BaseSlot',
        component: BaseSlot
    },
    {
        path: '/named-slot',
        name: 'NamedSlot',
        component: HomePageWithNamedSlots
    },
    {
        path: '/scoped-slot',
        name: 'ScopedSlot',
        component: HomePageWithScopedSlots
    },
    {
        path: '/base-mixin',
        name: 'BaseMixin',
        component: HomePageWithBaseMixin
    },
    {
        path: '/directives',
        name: 'Directives',
        component: HomePageWithDirectives
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = myCurrentUser.isUserLoggedIn;
    const isAdmin = myCurrentUser.isAdmin;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({name: 'Login'});
        } else if (to.matched.some(record => record.meta.isAdmin) && !isAdmin) {
            next({name: 'NotFound'});
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;