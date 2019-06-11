module.exports = {
    framework: 'vue',
    mode: 'origin',
    docs: {
        title: 'Regular Suite',
        url: 'https://rdepro.github.io/rdc-regular-suite/'
    },
    render: {
        includes: [
            '.js',
            '.json'
        ],
        validate(dataView) {
            if (!dataView.suiteName) {
                return '请在rda.config.js中配置suiteName';
            }
            return true;
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
