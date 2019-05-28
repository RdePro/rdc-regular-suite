import _ from './util';

export default (Component) => {
    Component.implement({
        defaults(data) {
            _.extend(this.data, data);
        },
        rules(rules) {
            _.extend(this.data, {
                rules
            });
        },
        templates(templates) {
            _.extend(this.data, {
                templates
            });
        }
    });
};
