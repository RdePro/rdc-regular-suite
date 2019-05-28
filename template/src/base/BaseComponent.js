/* BaseComponent */
import Regular from 'regularjs';
import BaseMixin from './_mixin';

export default Regular.extend({
    config(data) {
        this.supr(data);
    }
}).use(BaseMixin);
