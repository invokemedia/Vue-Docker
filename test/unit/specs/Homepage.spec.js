import Vue from 'vue';
import Homepage from '@/components/Homepage';

describe('Homepage.vue', () => {
    it('should render the homepage', () => {
        const Constructor = Vue.extend(Homepage);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.homepage h1').textContent)
            .to.equal('Welcome to Your Vue.js App');
    });
});
