import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import Blog from '@/components/Blog';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage,
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
    ],
});
