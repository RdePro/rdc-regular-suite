export default {
    extend(o1 = {}, o2 = {}, override) {
        for (const i in o2) {
            if (o1[i] === undefined || override) {
                o1[i] = o2[i];
            }
        }
        return o1;
    },
    filterParam(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                // eslint-disable-next-line no-mixed-operators
                if (!obj[key] && obj[key] !== 0 && obj[key] !== false || (this.isArray(obj[key]) && obj[key].length === 0)) {
                    delete obj[key];
                }
            }
        }
    },
    // 简化版的对象转request参数，_object对象必须只有一级，如{name: 'xxx', age: 18}
    object2query(obj) {
        let arr = [];
        for (let key of Object.keys(obj)) {
            let value = encodeURIComponent(obj[key]);
            arr.push(`${key}=${value}`);
        }
        return arr.join('&');
    },
    toQueryString(obj) {
        let keys = obj && Object.keys(obj);
        let params;
        if (keys && keys.length > 0) {
            params = keys.map(key => `${key}=${obj[key]}`).join('&');
        }
        return params;
    },
    isArray(arr) {
        return Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
    },
    getUrlParam(name) {
        const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
        const r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return r[2];
        }
        return null;
    },
    /**
     * 压缩regular模版
     * @param htmlstr
     * @returns {XML|string}
     * add by xuejimiao 2016/02/25
     */
    compressHtml(htmlstr) {
        // 防止nej打包模版后报错
        if (typeof htmlstr !== 'string') {
            return htmlstr;
        }
        htmlstr = htmlstr.replace(/(?:\r\n|\r|\n)/g, '');

        // eslint-disable-next-line one-var
        let htmlStrArrs,
            onHTML = false,
            onRegularExpression = false;
        htmlStrArrs = htmlstr.split('');
        return htmlStrArrs.map((item) => {
            if (item === '<') {
                onHTML = true;
            } else if (item === '>') {
                onHTML = false;
                return item;
            } else if (item === '{') {
                onRegularExpression = true;
            } else if (item === '}') {
                onRegularExpression = false;
                return item;
            }

            if (onHTML || onRegularExpression || !/[\n\s]/g.test(item)) {
                return item;
            }
        }).join('');
    }
};
