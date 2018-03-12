import Vue from 'vue';
import Blog from '@/components/Blog';

describe('Blog.vue', () => {
    it('should render the blog page', () => {
        const Constructor = Vue.extend(Blog);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.blog h1').textContent)
            .to.equal('Read some awesome articles soon!');
    });
});
