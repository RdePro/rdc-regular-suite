module.exports = {
    framework: 'vue',
    mode: 'origin',
    docs: {
        url: 'https://rdepro.github.io/rdc-vue-starter/'
    },
    render: {
        includes: [
            '.js',
            '.json'
        ],
        validate(dataView) {
            return !!dataView.suiteName;
        },
        mock: {
            suiteName: 'test-suite-name'
        }
    },
    docker: {
        tag: 'rdebase/rdc-regular-suite:0.0.1-beta.0',
        ports: [
            '7000:7000'
        ]
    },
    lint: {
        ext: ['.js']
    }
};
