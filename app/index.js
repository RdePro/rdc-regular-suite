export const install = (Regular) => {
    Regular.filter(require('./filters').default);
};

export const Hello = require('../app/components/hello').default;
