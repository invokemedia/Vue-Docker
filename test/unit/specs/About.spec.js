import Vue from 'vue';
import About from '@/components/About';

describe('About.vue', () => {
    it('should render the about page', () => {
        const Constructor = Vue.extend(About);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.about h1').textContent)
            .to.equal('Learn more about us.');
    });
});
