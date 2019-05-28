import BaseComponent from '@/base/BaseComponent';

export default BaseComponent.extend({
    template: '<h1>Hello, {#include this.$body}</h1>',
    config(data) {
        this.defaults({});
        this.supr(data);
    }
});
