import restate from 'regular-state';
import BaseComponent from '@/base/BaseComponent';
import { install } from '../index';

install(BaseComponent);

const routes = {
    app: {
        view: BaseComponent.extend({
            template: 'Hello Demo'
        })
    },
    test: {
        url: 'test',
        view: (option, resolve) => {
            require.ensure([], () => {
                resolve(require('./test/index').default);
            });
        }
    }
};

restate()
    .state(routes)
    .start({
        html5: true,
        view: document.querySelector('#app')
    });
