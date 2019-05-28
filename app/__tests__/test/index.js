import BaseComponent from '@/base/BaseComponent';
import template from './index.html';
import { Hello } from '../../index';

export default BaseComponent.extend({
    template,
    config() {
        this.data.message = 'Regular UI App';
        this.supr();
    }
}).component('hello', Hello);
