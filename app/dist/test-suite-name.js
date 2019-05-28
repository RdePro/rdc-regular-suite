!(function(t){
    let e={}; function n(r){
        if(e[r]){
            return e[r].exports;
        }let i=e[r]={i: r, l: !1, exports: {}}; return t[r].call(i.exports, i, i.exports, n), i.l=!0, i.exports;
    }n.m=t, n.c=e, n.d=function(t, e, r){
        n.o(t, e)||Object.defineProperty(t, e, {enumerable: !0, get: r});
    }, n.r=function(t){
        'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0});
    }, n.t=function(t, e){
        if(1&e&&(t=n(t)), 8&e){
            return t;
        }if(4&e&&'object'==typeof t&&t&&t.__esModule){
            return t;
        }let r=Object.create(null); if(n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2&e&&'string'!=typeof t){
            for(let i in t){
                n.d(r, i, (e => t[e]).bind(null, i));
            }
        }return r;
    }, n.n=function(t){
        let e=t&&t.__esModule?function(){
            return t.default;
        }:function(){
            return t;
        }; return n.d(e, 'a', e), e;
    }, n.o=function(t, e){
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p='', n(n.s=15);
}([function(t, e, n){
    (function(e, r){
        n(20)(); let i, o=t.exports, a=n(21), s=[].slice, u={}.toString, c='undefined'!=typeof window?window:e; o.noop=function(){}, o.uid=(i=0, function(){
            return i++;
        }), o.extend=function(t, e, n){
            for(let r in e){
                void 0!==t[r]&&!0!==n||(t[r]=e[r]);
            }return t;
        }, o.keys=function(t){
            if(Object.keys){
                return Object.keys(t);
            }let e=[]; for(let n in t){
                t.hasOwnProperty(n)&&e.push(n);
            }return e;
        }, o.varName='d', o.setName='p_', o.ctxName='c', o.extName='e', o.rWord=/^[\$\w]+$/, o.rSimpleAccessor=/^[\$\w]+(\.[\$\w]+)*$/, o.nextTick='function'==typeof r?r.bind(c):function(t){
            setTimeout(t, 0);
        }, o.prefix=`var ${o.varName}=${o.ctxName}.data;${o.extName}=${o.extName}||'';`, o.slice=function(t, e, n){
            for(var r=[], i=e||0, o=n||t.length; i<o; i++){
                let a=t[i]; r.push(a);
            }return r;
        }, o.typeOf=function(t){
            return null==t?String(t):u.call(t).slice(8, -1).toLowerCase();
        }, o.makePredicate=function(t, e){
            'string'==typeof t&&(t=t.split(' ')); let n='', r=[]; t:for(var i=0; i<t.length; ++i){
                for(let o=0; o<r.length; ++o){
                    if(r[o][0].length===t[i].length){
                        r[o].push(t[i]); continue t;
                    }
                }r.push([t[i]]);
            }function a(t){
                if(1===t.length){
                    return n+=`return str === '${t[0]}';`;
                }n+='switch(str){'; for(let e=0; e<t.length; ++e){
                    n+=`case '${t[e]}':`;
                }n+='return true}return false;';
            }if(r.length>3){
                r.sort((t, e) => e.length-t.length), n+='switch(str.length){'; for(i=0; i<r.length; ++i){
                    let s=r[i]; n+=`case ${s[0].length}:`, a(s);
                }n+='}';
            }else {
                a(t);
            }return new Function('str', n);
        }, o.trackErrorPos=(function(){
            let t=/\r\n|[\n\r\u2028\u2029]/g, e=20, n=20; function r(t, r, i, o){
                let a=t.length, s=r-e; s<0&&(s=0); let u=r+n; u>a&&(u=a); let c=`[${i+1}] ${s>0?'..':''}`, f=c+t.slice(s, u)+(u<a?'..':''); return o&&(f+=`\n${new Array(r-s+c.length+1).join(' ')}^^^`), f;
            }return function(e, n){
                n>e.length-1&&(n=e.length-1), t.lastIndex=0; let i=(function(t, e){
                        for(let n=0, r=0, i=t.length; r<i; r++){
                            let o=(t[r]||'').length; if(n+o>e){
                                return{num: r, line: t[r], start: e-r-n, prev: t[r-1], next: t[r+1]};
                            }n+=o;
                        }
                    }(e.split(t), n)), o=i.start, a=i.num; return`${(i.prev?`${r(i.prev, o, a-1)}\n`:'')+r(i.line, o, a, !0)}\n${i.next?`${r(i.next, o, a+1)}\n`:''}`;
            };
        }()); let f=/\((\?\!|\?\:|\?\=)/g; o.findSubCapture=function(t){
            let e=0, n=0, r=t.length, i=t.match(f); for(i=i?i.length:0; r--;){
                let o=t.charAt(r); 0!==r&&'\\'===t.charAt(r-1)||('('===o&&e++, ')'===o&&n++);
            }if(e!==n){
                throw`RegExp: ${t}'s bracket is not marched`;
            }return e-i;
        }, o.escapeRegExp=function(t){
            return t.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, t => `\\${t}`);
        }; let l=new RegExp(`&(?:(#x[0-9a-fA-F]+)|(#[0-9]+)|(${o.keys(a).join('|')}));`, 'gi'); o.convertEntity=function(t){
            return(`${t}`).replace(l, (t, e, n, r) => {
                let i; return i=n?parseInt(n.slice(1), 10):e?parseInt(e.slice(2), 16):a[r], String.fromCharCode(i);
            });
        }, o.createObject=function(t, e){
            function n(){}n.prototype=t; let r=new n(); return e&&o.extend(r, e), r;
        }, o.createProto=function(t, e){
            function n(){
                this.constructor=t;
            }return n.prototype=e, t.prototype=new n();
        }, o.clone=function(t){
            let e=o.typeOf(t); if('array'===e){
                for(var n=[], r=0, i=t.length; r<i; r++){
                    n[r]=t[r];
                }return n;
            }if('object'===e){
                n={}; for(var r in t){
                    t.hasOwnProperty(r)&&(n[r]=t[r]);
                }return n;
            }return t;
        }, o.equals=function(t, e){
            return!('number'!=typeof t||'number'!=typeof e||!isNaN(t)||!isNaN(e))||t===e;
        }; let h, p, d, v, m, g, y=/-([a-z])/g; o.camelCase=function(t){
            return t.replace(y, (t, e) => e.toUpperCase());
        }, o.throttle=function(t, e){
            e=e||100; let n, r, i, o=null, a=0, s=function(){
                a=+new Date(), o=null, i=t.apply(n, r), n=r=null;
            }; return function(){
                let u=+new Date(), c=e-(u-a); return n=this, r=arguments, c<=0||c>e?(clearTimeout(o), o=null, a=u, i=t.apply(n, r), n=r=null):o||(o=setTimeout(s, c)), i;
            };
        }, o.escape=(h=/&/g, p=/</g, d=/>/g, v=/\'/g, m=/\"/g, g=/[&<>\"\']/, function(t){
            return g.test(t)?t.replace(h, '&amp;').replace(p, '&lt;').replace(d, '&gt;').replace(v, '&#39;').replace(m, '&quot;'):t;
        }), o.cache=function(t){
            let e=[], n={}; return{set(t, r){
                return e.length>this.max&&(n[e.shift()]=void 0), void 0===n[t]&&e.push(t), n[t]=r, r;
            }, get(t){
                return void 0===t?n:n[t];
            }, max: t=t||1e3, len(){
                return e.length;
            }};
        }, o.handleEvent=function(t, e){
            let n, r=this; return'expression'===t.type&&(n=t.get), n?function(t){
                r.$update(function(){
                    let e=this.data; e.$event=t, !1===n(r)&&t&&t.preventDefault&&t.preventDefault(), e.$event=void 0;
                });
            }:function(){
                let e=s.call(arguments); e.unshift(t), r.$update(() => {
                    r.$emit.apply(r, e);
                });
            };
        }, o.once=function(t){
            let e=0; return function(){
                0==e++&&t.apply(this, arguments);
            };
        }, o.fixObjStr=function(t){
            return 0!==t.trim().indexOf('{')?`{${t}}`:t;
        }, o.map=function(t, e){
            for(var n=[], r=0, i=t.length; r<i; r++){
                n.push(e(t[r], r));
            }return n;
        }, o.log=function(t, e){
            'undefined'!=typeof console&&console[e||'log'](t);
        }, o.isVoidTag=o.makePredicate('area base br col embed hr img input keygen link menuitem meta param source track wbr r-content'), o.isBooleanAttr=o.makePredicate('selected checked disabled readonly required open autofocus controls autoplay compact loop defer multiple'), o.isFalse, o.isTrue, o.isExpr=function(t){
            return t&&'expression'===t.type;
        }, o.isGroup=function(t){
            return t.inject||t.$inject;
        }, o.getCompileFn=function(t, e, n){
            return e.$compile.bind(e, t, n);
        };
    }).call(this, n(6), n(17).setImmediate);
}, function(t, e, n){
    let r, i, o=t.exports, a=n(3), s=n(0), u=document.createElement('div'), c='http://www.w3.org/1999/xhtml', f='http://www.w3.org/2000/svg'; o.body=document.body, o.doc=document, o.tNode=u, u.addEventListener?(r=function(t, e, n){
        t.addEventListener(e, n, !1);
    }, i=function(t, e, n){
        t.removeEventListener(e, n, !1);
    }):(r=function(t, e, n){
        t.attachEvent(`on${e}`, n);
    }, i=function(t, e, n){
        t.detachEvent(`on${e}`, n);
    }), o.msie=parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1]), isNaN(o.msie)&&(o.msie=parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1])), o.find=function(t){
        if(document.querySelector){
            try{
                return document.querySelector(t);
            }catch(t){}
        }if(-1!==t.indexOf('#')){
            return document.getElementById(t.slice(1));
        }
    }, o.inject=function(t, e, n){
        if(n=n||'bottom', t){
            if(Array.isArray(t)){
                let r=t; t=o.fragment(); for(let i=0, a=r.length; i<a; i++){
                    t.appendChild(r[i]);
                }
            }let s; switch(n){
                case'bottom':e.appendChild(t); break; case'top':e.firstChild?e.insertBefore(t, e.firstChild):e.appendChild(t); break; case'after':(s=e.nextSibling)?s.parentNode.insertBefore(t, s):e.parentNode.appendChild(t); break; case'before':e.parentNode.insertBefore(t, e);
            }
        }
    }, o.id=function(t){
        return document.getElementById(t);
    }, o.create=function(t, e, n){
        if('svg'===e){
            if(!a.svg){
                throw Error('the env need svg support');
            }e=f;
        }return e?document.createElementNS(e, t):document.createElement(t);
    }, o.fragment=function(){
        return document.createDocumentFragment();
    }; let l, h={class(t, e){
        'className'in t&&(t.namespaceURI===c||!t.namespaceURI)?t.className=e||'':t.setAttribute('class', e);
    }, for(t, e){
        'htmlFor'in t?t.htmlFor=e:t.setAttribute('for', e);
    }, style(t, e){
        t.style?t.style.cssText=e:t.setAttribute('style', e);
    }, value(t, e){
        t.value=null!=e?e:'';
    }}; function p(t, e){
        return'change'===e&&o.msie<9&&t&&t.tagName&&'input'===t.tagName.toLowerCase()&&('checkbox'===t.type||'radio'===t.type)?'click':e;
    }o.attr=function(t, e, n){
        if(s.isBooleanAttr(e)){
            if(void 0===n){
                return t[e]||(t.attributes.getNamedItem(e)||function(){}).specified?e:void 0;
            }n?(t[e]=!0, t.setAttribute(e, e), o.msie&&o.msie<=7&&(t.defaultChecked=!0)):(t[e]=!1, t.removeAttribute(e));
        }else if(void 0!==n){
            h[e]?h[e](t, n):null===n?t.removeAttribute(e):t.setAttribute(e, n);
        }else if(t.getAttribute){
            let r=t.getAttribute(e, 2); return null===r?void 0:r;
        }
    }, o.on=function(t, e, n){
        let i=e.split(' '); n.real=function(e){
            let r=new y(e); r.origin=t, n.call(t, r);
        }, i.forEach((e) => {
            e=p(t, e), r(t, e, n.real);
        });
    }, o.off=function(t, e, n){
        let r=e.split(' '); n=n.real||n, r.forEach((e) => {
            e=p(t, e), i(t, e, n);
        });
    }, o.text=(l={}, o.msie&&o.msie<9?(l[1]='innerText', l[3]='nodeValue'):l[1]=l[3]='textContent', function(t, e){
        let n=l[t.nodeType]; if(null==e){
            return n?t[n]:'';
        }t[n]=e;
    }), o.html=function(t, e){
        if(void 0===e){
            return t.innerHTML;
        }t.innerHTML=e;
    }, o.replace=function(t, e){
        e.parentNode&&e.parentNode.replaceChild(t, e);
    }, o.remove=function(t){
        t.parentNode&&t.parentNode.removeChild(t);
    }, o.css=function(t, e, n){
        if('object'!==s.typeOf(e)){
            let r; if(void 0===n){
                return o.msie<=8&&''===(r=t.currentStyle&&t.currentStyle[e])&&(r='auto'), r=r||t.style[e], o.msie<=8&&(r=''===r?void 0:r), r;
            }(e=(`${e}`).replace(/-\D/g, t => t.charAt(1).toUpperCase()))&&(t.style[e]=n);
        }else {
            for(let i in e){
                e.hasOwnProperty(i)&&o.css(t, i, e[i]);
            }
        }
    }, o.addClass=function(t, e){
        let n=t.className||''; -1===(` ${n} `).indexOf(` ${e} `)&&(t.className=n?`${n} ${e}`:e);
    }, o.delClass=function(t, e){
        let n=t.className||''; t.className=(` ${n} `).replace(` ${e} `, ' ').trim();
    }, o.hasClass=function(t, e){
        return-1!==(` ${t.className||''} `).indexOf(` ${e} `);
    }; let d, v, m=/^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/, g=document; function y(t){
        if((t=t||window.event)._fixed){
            return t;
        }this.event=t, this.target=t.target||t.srcElement; let e=this.type=t.type, n=this.button=t.button; if(m.test(e)&&(this.pageX=null!=t.pageX?t.pageX:t.clientX+g.scrollLeft, this.pageY=null!=t.pageX?t.pageY:t.clientY+g.scrollTop, 'mouseover'===e||'mouseout'===e)){
            for(var r=t.relatedTarget||t[`${'mouseover'===e?'from':'to'}Element`]; r&&3===r.nodeType;){
                r=r.parentNode;
            }this.relatedTarget=r;
        }'DOMMouseScroll'!==e&&'mousewheel'!==e||(this.wheelDelta=t.wheelDelta?t.wheelDelta/120:-(t.detail||0)/3), this.which=t.which||t.keyCode, this.which||void 0===n||(this.which=1&n?1:2&n?3:4&n?2:0), this._fixed=!0;
    }g=g.compatMode&&'CSS1Compat'!==g.compatMode?g.body:g.documentElement, s.extend(y.prototype, {immediateStop: s.isFalse, stop(){
        this.preventDefault().stopPropagation();
    }, preventDefault(){
        return this.event.preventDefault?this.event.preventDefault():this.event.returnValue=!1, this;
    }, stopPropagation(){
        return this.event.stopPropagation?this.event.stopPropagation():this.event.cancelBubble=!0, this;
    }, stopImmediatePropagation(){
        this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation();
    }}), o.nextFrame=(d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){
        setTimeout(t, 16);
    }, v=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||function(t){
        clearTimeout(t);
    }, function(t){
        let e=d(t); return function(){
            v(e);
        };
    }), o.nextReflow=o.msie?function(t){
        return o.nextFrame(() => {
            document.body.offsetWidth, t();
        });
    }:o.nextFrame;
}, function(t, e, n){
    let r=n(3), i=n(8), o=n(9), a=n(4), s=n(0), u=n(22), c={}; if(r.browser){
        var f=n(1), l=n(23), h=n(12), p=f.doc; c=n(7);
    }let d=n(24), v=n(25), m=n(13), g=n(26), y=function(t, e){
        let n, i, a=r.isRunning; r.isRunning=!0, e=e||{}, (t=t||{}).data=t.data||{}, t.computed=t.computed||{}, t.events=t.events||{}, this.data&&s.extend(t.data, this.data), this.computed&&s.extend(t.computed, this.computed), this.events&&s.extend(t.events, this.events), s.extend(this, t, !0), this.$parent&&this.$parent._append(this), this._children=[], this.$refs={}, 'string'==typeof(i=this.template)&&i.length<16&&(n=f.find(i))&&(i=n.innerHTML), i&&i.nodeType&&(i=i.innerHTML), 'string'==typeof i&&(this.template=new o(i).parse()), this.computed=x(this.computed), this.$root=this.$root||this, this.events&&this.$on(this.events), this.$emit('$config'), this.config&&this.config(this.data); let u=this._body; this._body=null, u&&u.ast&&u.ast.length&&(this.$body=s.getCompileFn(u.ast, u.ctx, {outer: this, namespace: e.namespace, extra: e.extra, record: !0})), i&&(this.group=this.$compile(this.template, {namespace: e.namespace}), c.node(this)), this.$parent||this.$update(), this.$ready=!0, this.$emit('$init'), this.init&&this.init(this.data), r.isRunning=a;
    }; l&&(l.Regular=y), s.extend(y, {_directives: {__regexp__: []}, _plugins: {}, _protoInheritCache: ['directive', 'use'], __after__(t, e){
        let n, r, i; (this.__after__=t.__after__, e.name&&y.component(e.name, this), n=e.template)&&('string'==typeof n&&n.length<16&&(r=f.find(n))&&(n=r.innerHTML, (i=f.attr(r, 'name'))&&y.component(i, this)), n.nodeType&&(n=n.innerHTML), 'string'==typeof n&&(this.prototype.template=new o(n).parse())); e.computed&&(this.prototype.computed=x(e.computed)), y._inheritConfig(this, t);
    }, directive(t, e){
        if('object'===s.typeOf(t)){
            for(let n in t){
                t.hasOwnProperty(n)&&this.directive(n, t[n]);
            }return this;
        }let r, i=s.typeOf(t), o=this._directives; if(null!=e){
            return'function'==typeof e&&(e={link: e}), 'string'===i?o[t]=e:'regexp'===i&&(e.regexp=t, o.__regexp__.push(e)), this;
        }if('string'===i&&(r=o[t])){
            return r;
        }for(let a=o.__regexp__, u=0, c=a.length; u<c; u++){
            if((r=a[u]).regexp.test(t)){
                return r;
            }
        }
    }, plugin(t, e){
        let n=this._plugins; return null==e?n[t]:(n[t]=e, this);
    }, use(t){
        return'string'==typeof t&&(t=y.plugin(t)), 'function'!=typeof t?this:(t(this, y), this);
    }, config(t, e){
        let n=!1; if('object'==typeof t){
            for(let r in t){
                'END'!==r&&'BEGIN'!==r||(n=!0), a[r]=t[r];
            }
        }n&&i.setup();
    }, expression: m.expression, Parser: o, Lexer: i, _addProtoInheritCache(t, e){
        if(Array.isArray(t)){
            return t.forEach(y._addProtoInheritCache);
        }let n=`_${t}s`; y._protoInheritCache.push(t), y[n]={}, y[t]||(y[t]=function(r, i){
            let o=this[n]; if('object'==typeof r){
                for(let a in r){
                    r.hasOwnProperty(a)&&this[t](a, r[a]);
                }return this;
            }return null==i?o[r]:(o[r]=e?e(i):i, this);
        });
    }, _inheritConfig(t, e){
        let n=y._protoInheritCache; return s.slice(n).forEach((n) => {
            t[n]=e[n]; let r=`_${n}s`; e[r]&&(t[r]=s.createObject(e[r]));
        }), t;
    }}), u(y), y._addProtoInheritCache('component'), y._addProtoInheritCache('filter', t => ('function'==typeof t?{get: t}:t)), d.mixTo(y), v.mixTo(y), y.implement({init(){}, config(){}, destroy(){
        this.$emit('$destroy'), this.group&&this.group.destroy(!0), this.group=null, this.parentNode=null, this._watchers=null, this._children=[]; let t=this.$parent; if(t){
            let e=t._children.indexOf(this); t._children.splice(e, 1);
        }this.$parent=null, this.$root=null, this._handles=null, this.$refs=null;
    }, $compile(t, e){
        e=e||{}, 'string'==typeof t&&(t=new o(t).parse()); let n, r=this.__ext__, i=e.record; e.extra&&(this.__ext__=e.extra), i&&this._record(); let a=this._walk(t, e); if(i){
            n=this._release(); let s=this; n.length&&(a.ondestroy=function(){
                s.$unwatch(n);
            });
        }return e.extra&&(this.__ext__=r), a;
    }, $bind(t, e, n){
        let r=s.typeOf(e); if('expression'===e.type||'string'===r){
            this._bind(t, e, n);
        }else if('array'===r){
            for(var i=0, o=e.length; i<o; i++){
                this._bind(t, e[i]);
            }
        }else if('object'===r){
            for(var i in e){
                e.hasOwnProperty(i)&&this._bind(t, i, e[i]);
            }
        }return t.$update(), this;
    }, $unbind(){}, $inject: c.inject, $mute(t){
        let e=!1===(t=!!t)&&this._mute; return this._mute=!!t, e&&this.$update(), this;
    }, _bind(t, e, n){
        let r=this; if(!(t&&t instanceof y)){
            throw'$bind() should pass Regular component as first argument';
        }if(!e){
            throw'$bind() should  pass as least one expression to bind';
        }if(n||(n=e), e=m.expression(e), (n=m.expression(n)).set){
            let i=this.$watch(e, (e) => {
                t.$update(n, e);
            }); t.$on('$destroy', () => {
                r.$unwatch(i);
            });
        }if(e.set){
            let o=t.$watch(n, (t) => {
                r.$update(e, t);
            }); this.$on('$destroy', t.$unwatch.bind(t, o));
        }n.set(t, e.get(this));
    }, _walk(t, e){
        if('array'===s.typeOf(t)){
            for(var n=[], r=0, i=t.length; r<i; r++){
                n.push(this._walk(t[r], e));
            }return new h(n);
        }return'string'==typeof t?p.createTextNode(t):l[t.type||'default'].call(this, t, e);
    }, _append(t){
        this._children.push(t), t.$parent=this;
    }, _handleEvent(t, e, n, r){
        let i, o=this.constructor, a='function'!=typeof n?s.handleEvent.call(this, n, e):n, u=o.event(e); return u?i=u.call(this, t, a, r):f.on(t, e, a), u?i:function(){
            f.off(t, e, a);
        };
    }, _touchExpr(t){
        let e, n=this.__ext__, r={}; if('expression'!==t.type||t.touched){
            return t;
        }if(e=t.get||(t.get=new Function(s.ctxName, s.extName, `${s.prefix}return (${t.body})`)), r.get=n?function(t){
            return e(t, n);
        }:e, t.setbody&&!t.set){
            let i=t.setbody; t.set=function(e, n, r){
                return t.set=new Function(s.ctxName, s.setName, s.extName, s.prefix+i), t.set(e, n, r);
            }, t.setbody=null;
        }return t.set&&(r.set=n?function(e, r){
            return t.set(e, r, n);
        }:t.set), s.extend(r, {type: 'expression', touched: !0, once: t.once||t.constant}), r;
    }, _f_(t){
        let e=this.constructor.filter(t); if(!e){
            throw Error(`filter ${t} is undefined`);
        }return e;
    }, _sg_(t, e, n){
        if(void 0!==n){
            let r=this.computed[t]; if(r){
                if('expression'!==r.type||r.get||this._touchExpr(r), r.get){
                    return r.get(this);
                }s.log(`the computed '${t}' don't define the get function,  get data.${t} altnately`, 'warn');
            }
        }if(void 0!==e&&void 0!==t){
            return n&&void 0!==n[t]?n[t]:e[t];
        }
    }, _ss_(t, e, n, r, i){
        r=r||'='; let o, a=(i=this.computed)?i[t]:null; if('='!==r){
            switch(o=a?a.get(this):n[t], r){
                case'+=':e=o+e; break; case'-=':e=o-e; break; case'*=':e*=o; break; case'/=':e=o/e; break; case'%=':e=o%e;
            }
        }if(a){
            if(a.set){
                return a.set(this, e);
            }s.log(`the computed '${t}' don't define the set function,  assign data.${t} altnately`, 'warn');
        }return n[t]=e, e;
    }}), y.prototype.inject=function(){
        return s.log('use $inject instead of inject', 'error'), this.$inject.apply(this, arguments);
    }, y.filter(g), t.exports=y; var x=(function(){
        function t(t){
            return function(e){
                return t.call(e, e.data);
            };
        }function e(t){
            return function(e, n){
                return t.call(e, n, e.data), n;
            };
        }return function(n){
            if(n){
                let r, i, o, a={}; for(let s in n){
                    o=typeof(r=n[s]), 'expression'!==r.type?'string'===o?a[s]=m.expression(r):(i=a[s]={type: 'expression'}, 'function'===o?i.get=t(r):(r.get&&(i.get=t(r.get)), r.set&&(i.set=e(r.set)))):a[s]=r;
                }return a;
            }
        };
    }());
}, function(t, e, n){
    let r=n(0); e.svg='undefined'!=typeof document&&document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1'), e.browser='undefined'!=typeof document&&document.nodeType, e.exprCache=r.cache(1e3), e.isRunning=!1;
}, function(t, e){
    t.exports={BEGIN: '{', END: '}'};
}, function(t, e, n){
    let r=n(0), i=n(1), o={}, a=n(3), s='transitionend', u='animationend', c='transition', f='animation'; 'ontransitionend'in window||('onwebkittransitionend'in window?(s+=' webkitTransitionEnd', c='webkitTransition'):('onotransitionend'in i.tNode||'Opera'===navigator.appName)&&(s+=' oTransitionEnd', c='oTransition')), 'onanimationend'in window||('onwebkitanimationend'in window?(u+=' webkitAnimationEnd', f='webkitAnimation'):'onoanimationend'in i.tNode&&(u+=' oAnimationEnd', f='oAnimation')), o.inject=function(t, e, n, o){
        if(o=o||r.noop, Array.isArray(t)){
            for(var a=i.fragment(), s=0, u=0, c=t.length; u<c; u++){
                a.appendChild(t[u]);
            }i.inject(a, e, n); let f=function(){
                ++s===c&&o();
            }; for(c===s&&o(), u=0; u<c; u++){
                t[u].onenter?t[u].onenter(f):f();
            }
        }else {
            i.inject(t, e, n), t.onenter?t.onenter(o):o();
        }
    }, o.remove=function(t, e){
        if(t){
            var n=0; if(Array.isArray(t)){
                for(var r=0, i=t.length; r<i; r++){
                    o.remove(t[r], a);
                }return t;
            }t.onleave?t.onleave(() => {
                l(t, e);
            }):l(t, e);
        }function a(){
            ++n===i&&e&&e();
        }
    }; var l=function(t, e){
        i.remove(t), e&&e();
    }; function h(t){
        let e, n=0, r=0, i=0, o=0, a=0; return window.getComputedStyle&&(r=p((e=window.getComputedStyle(t))[`${c}Duration`])||r, i=p(e[`${c}Delay`])||i, o=p(e[`${f}Duration`])||o, a=p(e[`${f}Delay`])||a, n=Math.max(r+i, o+a)), 1e3*n*(5/3);
    }function p(t){
        let e, n=0; return t?(t.split(',').forEach((t) => {
            (e=parseFloat(t))>n&&(n=e);
        }), n):0;
    }o.startClassAnimate=function(t, e, n, o){
        let c, f, l, p; return!u&&!s||a.isRunning?n():(p=4!==o?r.once(() => {
            l&&clearTimeout(l), 2===o&&i.delClass(t, c), 3!==o&&i.delClass(t, e), i.off(t, u, p), i.off(t, s, p), n();
        }):r.once(() => {
            l&&clearTimeout(l), n();
        }), 2===o?(i.addClass(t, e), c=r.map(e.split(/\s+/), t => `${t}-active`).join(' '), i.nextReflow(() => {
            i.addClass(t, c), f=h(t), l=setTimeout(p, f);
        })):4===o?i.nextReflow(() => {
            i.delClass(t, e), f=h(t), l=setTimeout(p, f);
        }):i.nextReflow(() => {
            i.addClass(t, e), f=h(t), l=setTimeout(p, f);
        }), i.on(t, u, p), i.on(t, s, p), p);
    }, o.startStyleAnimate=function(t, e, n){
        let o, a, c; return i.nextReflow(() => {
            i.css(t, e), o=h(t), c=setTimeout(a, o);
        }), a=r.once(() => {
            c&&clearTimeout(c), i.off(t, u, a), i.off(t, s, a), n();
        }), i.on(t, u, a), i.on(t, s, a), a;
    }, t.exports=o;
}, function(t, e){
    let n; n=(function(){
        return this;
    }()); try{
        n=n||new Function('return this')();
    }catch(t){
        'object'==typeof window&&(n=window);
    }t.exports=n;
}, function(t, e, n){
    var r=n(1), i=n(5), o=t.exports={node(t){
        let e, n, r; if(t){
            if(t.element){
                return t.element;
            }if('function'==typeof t.node){
                return t.node();
            }if('number'==typeof t.nodeType){
                return t;
            }if(t.group){
                return o.node(t.group);
            }if(e=t.children){
                if(1===e.length){
                    return o.node(e[0]);
                }r=[]; for(let i=0, a=e.length; i<a; i++){
                    n=o.node(e[i]), Array.isArray(n)?r.push.apply(r, n):n&&r.push(n);
                }return r;
            }
        }
    }, inject(t, e){
        let n=o.node(this.group||this); if(!1===t){
            return i.remove(n), this;
        }if(!n){
            return this;
        }if('string'==typeof t&&(t=r.find(t)), !t){
            throw Error('injected node is not found');
        }if(i.inject(n, t, e), this.$emit){
            let a=this.parentNode, s='after'===e||'before'===e?t.parentNode:t; this.parentNode=s, this.$emit('$inject', t, e, a);
        }return this;
    }, last(t){
        let e=t.children; return'function'==typeof t.last?t.last():'number'==typeof t.nodeType?t:e&&e.length?o.last(e[e.length-1]):t.group?o.last(t.group):void 0;
    }, destroy(t, e){
        if(t){
            if(Array.isArray(t)){
                for(let n=0, i=t.length; n<i; n++){
                    o.destroy(t[n], e);
                }
            }let a=t.children; if('function'==typeof t.destroy){
                return t.destroy(e);
            }'number'==typeof t.nodeType&&e&&r.remove(t), a&&a.length&&(o.destroy(a, !0), t.children=null);
        }
    }}; r.element=function(t, e){
        if(!t){
            return e?[]:null;
        }let n=o.node(t); if(1===n.nodeType){
            return e?[n]:n;
        }for(var r=[], i=0; i<n.length; i++){
            let a=n[i]; if(a&&1===a.nodeType){
                if(!e){
                    return a;
                }r.push(a);
            }
        }return e?r:r[0];
    };
}, function(t, e, n){
    let r, i, o=n(0), a=n(4), s={'}': '{', ']': '['}, u={NAME: /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/, IDENT: /[\$_A-Za-z][_0-9A-Za-z\$]*/, SPACE: /[\r\n\t\f ]/}, c=/a|(b)/.exec('a'), f=c&&void 0===c[1]?function(t){
        return void 0!==t;
    }:function(t){
        return!!t;
    }; function l(t){
        return function(e){
            return{type: t, value: e};
        };
    }function h(t, e){
        s[a.END]&&(this.markStart=s[a.END], this.markEnd=a.END), this.input=(t||'').trim(), this.opts=e||{}, this.map=2!==this.opts.mode?r:i, this.states=['INIT'], e&&e.expression&&(this.states.push('JST'), this.expression=!0);
    }let p=h.prototype; function d(t){
        for(var e, n, r={}, i=0, a=t.length; i<a; i++){
            (r[n=(e=t[i])[2]||'INIT']||(r[n]={rules: [], links: []})).rules.push(e);
        }return (function(t){
            let e, n, r, i, a, s, c; function f(t, e){
                return'string'==typeof u[e]?o.escapeRegExp(u[e]):String(u[e]).slice(1, -1);
            }for(let h in t){
                (e=t[h]).curIndex=1, n=e.rules, r=[]; for(let p=0, d=n.length; p<d; p++){
                    c=n[p], a=c[0], 'string'==typeof(i=c[1])&&(i=l(i)), 'regexp'===o.typeOf(a)&&(a=a.toString().slice(1, -1)), a=a.replace(/\{(\w+)\}/g, f), s=o.findSubCapture(a)+1, e.links.push([e.curIndex, s, i]), e.curIndex+=s, r.push(a);
                }e.TRUNK=new RegExp(`^(?:(${r.join(')|(')}))`);
            }return t;
        }(r));
    }p.lex=function(t){
        t=(t||this.input).trim(); let e, n, r, i, o, a=[]; this.input=t, this.marks=0, this.index=0; for(;t;){
            0, o=this.state(), (n=(e=this.map[o]).TRUNK.exec(t))||this.error('Unrecoginized Token'), r=n[0].length, t=t.slice(r), (i=this._process.call(this, n, e, t))&&a.push(i), this.index+=r;
        }return a.push({type: 'EOF'}), a;
    }, p.error=function(t){
        throw Error(`Parse Error: ${t}:\n${o.trackErrorPos(this.input, this.index)}`);
    }, p._process=function(t, e, n){
        for(var r, i=e.links, o=!1, a=i.length, s=0; s<a; s++){
            let u=i[s], c=u[2], l=u[0]; if(f(t[l])){
                o=!0, c&&(r=c.apply(this, t.slice(l, l+u[1])))&&(r.pos=this.index); break;
            }
        }if(!o){
            switch(n.charAt(0)){
                case'<':this.enter('TAG'); break; default:this.enter('JST');
            }
        }return r;
    }, p.enter=function(t){
        return this.states.push(t), this;
    }, p.state=function(){
        let t=this.states; return t[t.length-1];
    }, p.leave=function(t){
        let e=this.states; t&&e[e.length-1]!==t||e.pop();
    }, h.setup=function(){
        u.END=a.END, u.BEGIN=a.BEGIN, r=d([v.ENTER_JST, v.ENTER_TAG, v.TEXT, v.TAG_NAME, v.TAG_OPEN, v.TAG_CLOSE, v.TAG_PUNCHOR, v.TAG_ENTER_JST, v.TAG_UNQ_VALUE, v.TAG_STRING, v.TAG_SPACE, v.TAG_COMMENT, v.JST_OPEN, v.JST_CLOSE, v.JST_COMMENT, v.JST_EXPR_OPEN, v.JST_IDENT, v.JST_SPACE, v.JST_LEAVE, v.JST_NUMBER, v.JST_PUNCHOR, v.JST_STRING, v.JST_COMMENT]), i=d([v.ENTER_JST2, v.TEXT, v.JST_COMMENT, v.JST_OPEN, v.JST_CLOSE, v.JST_EXPR_OPEN, v.JST_IDENT, v.JST_SPACE, v.JST_LEAVE, v.JST_NUMBER, v.JST_PUNCHOR, v.JST_STRING, v.JST_COMMENT]);
    }; var v={ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function(t){
        if(this.enter('JST'), t){
            return{type: 'TEXT', value: t};
        }
    }], ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function(t){
        if(this.enter('JST'), t){
            return{type: 'TEXT', value: t};
        }
    }], ENTER_TAG: [/[^\x00]*?(?=<[\w\/\!])/, function(t){
        if(this.enter('TAG'), t){
            return{type: 'TEXT', value: t};
        }
    }], TEXT: [/[^\x00]+/, 'TEXT'], TAG_NAME: [/{NAME}/, 'NAME', 'TAG'], TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f\t ]+/, 'UNQ', 'TAG'], TAG_OPEN: [/<({NAME})\s*/, function(t, e){
        return{type: 'TAG_OPEN', value: e};
    }, 'TAG'], TAG_CLOSE: [/<\/({NAME})[\r\n\f\t ]*>/, function(t, e){
        return this.leave(), {type: 'TAG_CLOSE', value: e};
    }, 'TAG'], TAG_ENTER_JST: [/(?={BEGIN})/, function(){
        this.enter('JST');
    }, 'TAG'], TAG_PUNCHOR: [/[\>\/=&]/, function(t){
        return'>'===t&&this.leave(), {type: t, value: t};
    }, 'TAG'], TAG_STRING: [/'([^']*)'|"([^"]*)\"/, function(t, e, n){
        return{type: 'STRING', value: e||n||''};
    }, 'TAG'], TAG_SPACE: [/{SPACE}+/, null, 'TAG'], TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, function(t){
        this.leave();
    }, 'TAG'], JST_OPEN: ['{BEGIN}#{SPACE}*({IDENT})', function(t, e){
        return{type: 'OPEN', value: e};
    }, 'JST'], JST_LEAVE: [/{END}/, function(t){
        return this.markEnd===t&&this.expression?{type: this.markEnd, value: this.markEnd}:this.markEnd&&this.marks?(this.marks--, {type: this.markEnd, value: this.markEnd}):(this.firstEnterStart=!1, this.leave('JST'), {type: 'END'});
    }, 'JST'], JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function(t, e){
        return this.leave('JST'), {type: 'CLOSE', value: e};
    }, 'JST'], JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function(){
        this.leave();
    }, 'JST'], JST_EXPR_OPEN: ['{BEGIN}', function(t, e){
        if(t===this.markStart){
            if(this.expression){
                return{type: this.markStart, value: this.markStart};
            }if(this.firstEnterStart||this.marks){
                return this.marks++, this.firstEnterStart=!1, {type: this.markStart, value: this.markStart};
            }this.firstEnterStart=!0;
        }return{type: 'EXPR_OPEN', escape: !1};
    }, 'JST'], JST_IDENT: ['{IDENT}', 'IDENT', 'JST'], JST_SPACE: [/[ \r\n\f]+/, null, 'JST'], JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function(t){
        return{type: t, value: t};
    }, 'JST'], JST_STRING: [/'([^']*)'|"([^"]*)"/, function(t, e, n){
        return{type: 'STRING', value: e||n||''};
    }, 'JST'], JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function(t){
        return{type: 'NUMBER', value: parseFloat(t, 10)};
    }, 'JST']}; h.setup(), t.exports=h;
}, function(t, e, n){
    let r=n(0), i=n(4), o=n(10), a=n(8), s=r.varName, u=r.ctxName, c=r.extName, f=r.makePredicate('STRING IDENT NUMBER'), l=r.makePredicate('true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object'); function h(t, e){
        e=e||{}, this.input=t, this.tokens=new a(t, e).lex(), this.pos=0, this.length=this.tokens.length;
    }let p=h.prototype; p.parse=function(){
        this.pos=0; let t=this.program(); return'TAG_CLOSE'===this.ll().type&&this.error('You may got a unclosed Tag'), t;
    }, p.ll=function(t){
        (t=t||1)<0&&(t+=1); let e=this.pos+t-1; return e>this.length-1?this.tokens[this.length-1]:this.tokens[e];
    }, p.la=function(t){
        return(this.ll(t)||'').type;
    }, p.match=function(t, e){
        let n; if(n=this.eat(t, e)){
            return n;
        }n=this.ll(), this.error(`expect [${t}${null==e?'':`:${e}`}]" -> got "[${n.type}${null==e?'':`:${n.value}`}]`, n.pos);
    }, p.error=function(t, e){
        throw t=`\n【 parse failed 】 ${t}:\n\n${r.trackErrorPos(this.input, 'number'==typeof e?e:this.ll().pos||0)}`, new Error(t);
    }, p.next=function(t){
        t=t||1, this.pos+=t;
    }, p.eat=function(t, e){
        let n=this.ll(); if('string'!=typeof t){
            for(let r=t.length; r--;){
                if(n.type===t[r]){
                    return this.next(), n;
                }
            }
        }else if(n.type===t&&(void 0===e||n.value===e)){
            return this.next(), n;
        }return!1;
    }, p.program=function(){
        for(var t=[], e=this.ll(); 'EOF'!==e.type&&'TAG_CLOSE'!==e.type;){
            t.push(this.statement()), e=this.ll();
        }return t;
    }, p.statement=function(){
        let t=this.ll(); switch(t.type){
            case'NAME':case'TEXT':var e=t.value; for(this.next(); t=this.eat(['NAME', 'TEXT']);){
                e+=t.value;
            }return o.text(e); case'TAG_OPEN':return this.xml(); case'OPEN':return this.directive(); case'EXPR_OPEN':return this.interplation(); default:this.error(`Unexpected token: ${this.la()}`);
        }
    }, p.xml=function(){
        let t, e, n, i; return t=this.match('TAG_OPEN').value, e=this.attrs(), i=this.eat('/'), this.match('>'), i||r.isVoidTag(t)||(n=this.program(), this.eat('TAG_CLOSE', t)||this.error(`expect </${t}> gotno matched closeTag`)), o.element(t, e, n);
    }, p.xentity=function(t){
        let e, n, r=t.value; if('NAME'===t.type){
            if(~r.indexOf('.')){
                let i=r.split('.'); r=i[0], n=i[1];
            }return this.eat('=')&&(e=this.attvalue(n)), o.attribute(r, e, n);
        }return'if'!==r&&this.error(`current version. ONLY RULE #if #else #elseif is valid in tag, the rule #${r} is invalid`), this.if(!0);
    }, p.attrs=function(t){
        let e; e=t?['NAME']:['NAME', 'OPEN']; for(var n, r=[]; n=this.eat(e);){
            r.push(this.xentity(n));
        }return r;
    }, p.attvalue=function(t){
        let e=this.ll(); switch(e.type){
            case'NAME':case'UNQ':case'STRING':this.next(); var n=e.value; if(~n.indexOf(i.BEGIN)&&~n.indexOf(i.END)&&'cmpl'!==t){
                let r=!0, a=new h(n, {mode: 2}).parse(); if(1===a.length&&'expression'===a[0].type){
                    return a[0];
                }let s=[]; a.forEach((t) => {
                    t.constant||(r=!1), s.push(t.body||`'${t.text.replace(/'/g, '\\\'')}'`);
                }), s=`[${s.join(',')}].join('')`, n=o.expression(s, null, r);
            }return n; case'EXPR_OPEN':return this.interplation(); default:this.error(`Unexpected token: ${this.la()}`);
        }
    }, p.directive=function(){
        let t=this.ll().value; if(this.next(), 'function'==typeof this[t]){
            return this[t]();
        }this.error(`Undefined directive[${t}]`);
    }, p.interplation=function(){
        this.match('EXPR_OPEN'); let t=this.expression(!0); return this.match('END'), t;
    }, p.inc=p.include=function(){
        let t=this.expression(); return this.match('END'), o.template(t);
    }, p.if=function(t){
        let e, n, r=this.expression(), i=[], a=[], s=i, u=t?'attrs':'statement'; for(this.match('END'); !(n=this.eat('CLOSE'));){
            if('OPEN'===(e=this.ll()).type){
                switch(e.value){
                    case'else':s=a, this.next(), this.match('END'); break; case'elseif':return this.next(), a.push(this.if(t)), o.if(r, i, a); default:s.push(this[u](!0));
                }
            }else {
                s.push(this[u](!0));
            }
        }return'if'!==n.value&&this.error('Unmatched if directive'), o.if(r, i, a);
    }, p.list=function(){
        let t, e, n, r=this.expression(), i=[], a=[], s=i; for(this.match('IDENT', 'as'), t=this.match('IDENT').value, this.eat('IDENT', 'by')&&(this.eat('IDENT', `${t}_index`)?n=!0:(n=this.expression()).constant&&(n=!0)), this.match('END'); !(e=this.eat('CLOSE'));){
            this.eat('OPEN', 'else')?(s=a, this.match('END')):s.push(this.statement());
        }return'list'!==e.value&&this.error(`expect list got /${e.value} `, e.pos), o.list(r, t, i, a, n);
    }, p.expression=function(){
        let t; return this.eat('@(')?((t=this.expr()).once=!0, this.match(')')):t=this.expr(), t;
    }, p.expr=function(){
        this.depend=[]; let t=this.filter(), e=t.get||t, n=t.set; return o.expression(e, n, !this.depend.length);
    }, p.filter=function(){
        let t, e, n=this.assign(), i=this.eat('|'), o=[], a=n.set, s=''; if(i){
            a&&(t=[]), '(function(t){'; do{
                s=`t = ${u}._f_('${this.match('IDENT').value}' ).get.call( ${r.ctxName},t`, this.eat(':')?s+=`, ${this.arguments('|').join(',')});`:s+=');', o.push(s), t&&t.unshift(s.replace(' ).get.call', ' ).set.call'));
            }while(i=this.eat('|'));return o.push('return t'), t&&t.push('return t'), e=`(function(t){${o.join('')}})(${n.get})`, t&&(a=a.replace(r.setName, `(function(t){${t.join('')}})(${r.setName})`)), this.getset(e, a);
        }return n;
    }, p.assign=function(){
        let t, e=this.condition(); return(t=this.eat(['=', '+=', '-=', '*=', '/=', '%=']))?(e.set||this.error('invalid lefthand expression in assignment expression'), this.getset(e.set.replace(`,${r.setName}`, `,${this.condition().get}`).replace('\'=\'', `'${t.type}'`), e.set)):e;
    }, p.condition=function(){
        let t=this.or(); return this.eat('?')?this.getset([`${t.get}?`, this.assign().get, this.match(':').type, this.assign().get].join('')):t;
    }, p.or=function(){
        let t=this.and(); return this.eat('||')?this.getset(`${t.get}||${this.or().get}`):t;
    }, p.and=function(){
        let t=this.equal(); return this.eat('&&')?this.getset(`${t.get}&&${this.and().get}`):t;
    }, p.equal=function(){
        let t, e=this.relation(); return(t=this.eat(['==', '!=', '===', '!==']))?this.getset(e.get+t.type+this.equal().get):e;
    }, p.relation=function(){
        let t, e=this.additive(); return(t=this.eat(['<', '>', '>=', '<='])||this.eat('IDENT', 'in'))?this.getset(e.get+t.value+this.relation().get):e;
    }, p.additive=function(){
        let t, e=this.multive(); return(t=this.eat(['+', '-']))?this.getset(e.get+t.value+this.additive().get):e;
    }, p.multive=function(){
        let t, e=this.range(); return(t=this.eat(['*', '/', '%']))?this.getset(e.get+t.type+this.multive().get):e;
    }, p.range=function(){
        let t, e=this.unary(); if(this.eat('..')){
            t=this.unary(); let n=`(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(${e.get},${t.get})`; return this.getset(n);
        }return e;
    }, p.unary=function(){
        let t; return(t=this.eat(['+', '-', '~', '!']))?this.getset(`(${t.type}${this.unary().get})`):this.member();
    }, p.member=function(t, e, n, i){
        let o, a, l=!1; t?'string'==typeof e&&f(e)?n.push(e):(n&&n.length&&this.depend.push(n), n=null):'string'===typeof(a=this.primary())?((n=[]).push(a), e=a, `${c}.${a}`, t=`${u}._sg_('${a}', ${s}, ${c})`, l=!0):'this'===a.get?(t=u, n=['this']):(n=null, t=a.get); if(o=this.eat(['[', '.', '('])){
            switch(o.type){
                case'.':var h=this.match('IDENT').value; return i=t, '('!==this.la()?t=`${u}._sg_('${h}', ${t})`:t+=`['${h}']`, this.member(t, h, n, i); case'[':return a=this.assign(), i=t, '('!==this.la()?t=`${u}._sg_(${a.get}, ${t})`:t+=`[${a.get}]`, this.match(']'), this.member(t, a, n, i); case'(':return t=`${t}(${this.arguments().join(',')})`, this.match(')'), this.member(t, null, n);
            }
        }n&&n.length&&this.depend.push(n); let p={get: t}; return e&&(p.set=`${u}._ss_(${e.get?e.get:`'${e}'`},${r.setName},${i||r.varName}, '=', ${l?1:0})`), p;
    }, p.arguments=function(t){
        t=t||')'; let e=[]; do{
            this.la()!==t&&e.push(this.assign().get);
        }while(this.eat(','));return e;
    }, p.primary=function(){
        let t=this.ll(); switch(t.type){
            case'{':return this.object(); case'[':return this.array(); case'(':return this.paren(); case'STRING':return this.next(), this.getset(`'${t.value}'`); case'NUMBER':return this.next(), this.getset(`${t.value}`); case'IDENT':return this.next(), l(t.value)?this.getset(t.value):t.value; default:this.error(`Unexpected Token: ${t.type}`);
        }
    }, p.object=function(){
        for(var t=[this.match('{').type], e=this.eat(['STRING', 'IDENT', 'NUMBER']); e;){
            t.push(`'${e.value}'${this.match(':').type}`); let n=this.assign().get; t.push(n), e=null, this.eat(',')&&(e=this.eat(['STRING', 'IDENT', 'NUMBER']))&&t.push(',');
        }return t.push(this.match('}').type), {get: t.join('')};
    }, p.array=function(){
        let t, e=[this.match('[').type]; if(this.eat(']')){
            e.push(']');
        }else{
            for(;(t=this.assign())&&(e.push(t.get), this.eat(','));){
                e.push(',');
            }e.push(this.match(']').type);
        }return{get: e.join('')};
    }, p.paren=function(){
        this.match('('); let t=this.filter(); return t.get=`(${t.get})`, this.match(')'), t;
    }, p.getset=function(t, e){
        return{get: t, set: e};
    }, t.exports=h;
}, function(t, e){
    t.exports={element(t, e, n){
        return{type: 'element', tag: t, attrs: e, children: n};
    }, attribute(t, e, n){
        return{type: 'attribute', name: t, value: e, mdf: n};
    }, if(t, e, n){
        return{type: 'if', test: t, consequent: e, alternate: n};
    }, list(t, e, n, r, i){
        return{type: 'list', sequence: t, alternate: r, variable: e, body: n, track: i};
    }, expression(t, e, n){
        return{type: 'expression', body: t, constant: n||!1, setbody: e||!1};
    }, text(t){
        return{type: 'text', text: t};
    }, template(t){
        return{type: 'template', content: t};
    }};
}, function(t, e, n){
    let r=n(0); function i(t, e){
        return t===e;
    }function o(t, e, n, r){
        if(!n){
            return (function(t, e){
                let n=t.length; if(n!==e.length){
                    return!0;
                }for(let r=0; r<n; r++){
                    if(t[r]!==e[r]){
                        return!0;
                    }
                }return!1;
            }(t, e));
        }for(var o=(function(t, e, n){
                for(var r=t.length, o=e.length, a=(n=n||i, []), s=0; s<=r; s++){
                    a.push([s]);
                }for(var u=1; u<=o; u++){
                    a[0][u]=u;
                }for(s=1; s<=r; s++){
                    for(u=1; u<=o; u++){
                        n(t[s-1], e[u-1])?a[s][u]=a[s-1][u-1]:a[s][u]=Math.min(a[s-1][u]+1, a[s][u-1]+1);
                    }
                }return a;
            }(e, t, r)), a=v=e.length, s=t.length, u=s, c=[], f=o[a][u]; a>0||u>0;){
            if(0!==a){
                if(0!==u){
                    let l=o[a-1][u-1], h=o[a-1][u], p=o[a][u-1], d=Math.min(p, h, l); d===h?(c.unshift(2), a--, f=h):d===l?(l===f?c.unshift(0):(c.unshift(1), f=l), a--, u--):(c.unshift(3), u--, f=p);
                }else {
                    c.unshift(2), a--;
                }
            }else {
                c.unshift(3), u--;
            }
        }var v=0; s=0; let m=[], g={index: null, add: 0, removed: []}; for(a=0; a<c.length; a++){
            switch(c[a]>0?null===g.index&&(g.index=s):null!=g.index&&(m.push(g), g={index: null, add: 0, removed: []}), c[a]){
                case 0:v++, s++; break; case 3:g.add++, s++; break; case 2:g.removed.push(e[v]), v++; break; case 1:g.add++, g.removed.push(e[v]), v++, s++;
            }
        }return null!=g.index&&m.push(g), m;
    }t.exports={diffArray: o, diffObject(t, e, n){
        if(n){
            return o(r.keys(t), r.keys(e), n, (n, r) => t[r]===e[n]);
        }for(let i in t){
            if(e[i]!==t[i]){
                return!0;
            }
        }for(let a in e){
            if(e[a]!==t[a]){
                return!0;
            }
        }return!1;
    }};
}, function(t, e, n){
    let r=n(0), i=n(7); function o(t){
        this.children=t||[];
    }let a=r.extend(o.prototype, {destroy(t){
        i.destroy(this.children, t), this.ondestroy&&this.ondestroy(), this.children=null;
    }, get(t){
        return this.children[t];
    }, push(t){
        this.children.push(t);
    }}); a.inject=a.$inject=i.inject, t.exports=o;
}, function(t, e, n){
    let r=n(3).exprCache, i=(n(0), n(9)); t.exports={expression(t, e){
        if('string'==typeof t&&(t=t.trim())&&(t=r.get(t)||r.set(t, new i(t, {mode: 2, expression: !0}).expression())), t){
            return t;
        }
    }, parse(t){
        return new i(t).parse();
    }};
}, function(t, e, n){
    let r=n(3), i=n(4), o=t.exports=n(2), a=o.Parser, s=o.Lexer; r.browser&&(n(27), n(31), n(32), o.dom=n(1)), o.env=r, o.util=n(0), o.parse=function(t, e){
        ((e=e||{}).BEGIN||e.END)&&(e.BEGIN&&(i.BEGIN=e.BEGIN), e.END&&(i.END=e.END), s.setup()); let n=new a(t).parse(); return e.stringify?JSON.stringify(n):n;
    };
}, function(t, e, n){
    'use strict'; n.r(e), n.d(e, 'install', () => r), n.d(e, 'Hello', () => i); const r=(t) => {
            t.filter(n(16).default);
        }, i=n(33).default;
}, function(t, e, n){
    'use strict'; n.r(e), e.default={appendDate: t => `${t} - ${new Date()}`};
}, function(t, e, n){
    (function(t){
        let r=void 0!==t&&t||'undefined'!=typeof self&&self||window, i=Function.prototype.apply; function o(t, e){
            this._id=t, this._clearFn=e;
        }e.setTimeout=function(){
            return new o(i.call(setTimeout, r, arguments), clearTimeout);
        }, e.setInterval=function(){
            return new o(i.call(setInterval, r, arguments), clearInterval);
        }, e.clearTimeout=e.clearInterval=function(t){
            t&&t.close();
        }, o.prototype.unref=o.prototype.ref=function(){}, o.prototype.close=function(){
            this._clearFn.call(r, this._id);
        }, e.enroll=function(t, e){
            clearTimeout(t._idleTimeoutId), t._idleTimeout=e;
        }, e.unenroll=function(t){
            clearTimeout(t._idleTimeoutId), t._idleTimeout=-1;
        }, e._unrefActive=e.active=function(t){
            clearTimeout(t._idleTimeoutId); let e=t._idleTimeout; e>=0&&(t._idleTimeoutId=setTimeout(() => {
                t._onTimeout&&t._onTimeout();
            }, e));
        }, n(18), e.setImmediate='undefined'!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate, e.clearImmediate='undefined'!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate;
    }).call(this, n(6));
}, function(t, e, n){
    (function(t, e){
        !(function(t, n){
            'use strict'; if(!t.setImmediate){
                var r, i, o, a, s, u=1, c={}, f=!1, l=t.document, h=Object.getPrototypeOf&&Object.getPrototypeOf(t); h=h&&h.setTimeout?h:t, '[object process]'==={}.toString.call(t.process)?r=function(t){
                    e.nextTick(() => {
                        d(t);
                    });
                }:!(function(){
                    if(t.postMessage&&!t.importScripts){
                        let e=!0, n=t.onmessage; return t.onmessage=function(){
                            e=!1;
                        }, t.postMessage('', '*'), t.onmessage=n, e;
                    }
                }())?t.MessageChannel?((o=new MessageChannel()).port1.onmessage=function(t){
                        d(t.data);
                    }, r=function(t){
                        o.port2.postMessage(t);
                    }):l&&'onreadystatechange'in l.createElement('script')?(i=l.documentElement, r=function(t){
                        let e=l.createElement('script'); e.onreadystatechange=function(){
                            d(t), e.onreadystatechange=null, i.removeChild(e), e=null;
                        }, i.appendChild(e);
                    }):r=function(t){
                        setTimeout(d, 0, t);
                    }:(a=`setImmediate$${Math.random()}$`, s=function(e){
                        e.source===t&&'string'==typeof e.data&&0===e.data.indexOf(a)&&d(+e.data.slice(a.length));
                    }, t.addEventListener?t.addEventListener('message', s, !1):t.attachEvent('onmessage', s), r=function(e){
                        t.postMessage(a+e, '*');
                    }), h.setImmediate=function(t){
                    'function'!=typeof t&&(t=new Function(`${t}`)); for(var e=new Array(arguments.length-1), n=0; n<e.length; n++){
                        e[n]=arguments[n+1];
                    }let i={callback: t, args: e}; return c[u]=i, r(u), u++;
                }, h.clearImmediate=p;
            }function p(t){
                delete c[t];
            }function d(t){
                if(f){
                    setTimeout(d, 0, t);
                }else{
                    let e=c[t]; if(e){
                        f=!0; try{
                            !(function(t){
                                let e=t.callback, r=t.args; switch(r.length){
                                    case 0:e(); break; case 1:e(r[0]); break; case 2:e(r[0], r[1]); break; case 3:e(r[0], r[1], r[2]); break; default:e.apply(n, r);
                                }
                            }(e));
                        }finally{
                            p(t), f=!1;
                        }
                    }
                }
            }
        }('undefined'==typeof self?void 0===t?this:t:self));
    }).call(this, n(6), n(19));
}, function(t, e){
    let n, r, i=t.exports={}; function o(){
        throw new Error('setTimeout has not been defined');
    }function a(){
        throw new Error('clearTimeout has not been defined');
    }function s(t){
        if(n===setTimeout){
            return setTimeout(t, 0);
        }if((n===o||!n)&&setTimeout){
            return n=setTimeout, setTimeout(t, 0);
        }try{
            return n(t, 0);
        }catch(e){
            try{
                return n.call(null, t, 0);
            }catch(e){
                return n.call(this, t, 0);
            }
        }
    }!(function(){
        try{
            n='function'==typeof setTimeout?setTimeout:o;
        }catch(t){
            n=o;
        }try{
            r='function'==typeof clearTimeout?clearTimeout:a;
        }catch(t){
            r=a;
        }
    }()); let u, c=[], f=!1, l=-1; function h(){
        f&&u&&(f=!1, u.length?c=u.concat(c):l=-1, c.length&&p());
    }function p(){
        if(!f){
            let t=s(h); f=!0; for(let e=c.length; e;){
                for(u=c, c=[]; ++l<e;){
                    u&&u[l].run();
                }l=-1, e=c.length;
            }u=null, f=!1, (function(t){
                if(r===clearTimeout){
                    return clearTimeout(t);
                }if((r===a||!r)&&clearTimeout){
                    return r=clearTimeout, clearTimeout(t);
                }try{
                    r(t);
                }catch(e){
                    try{
                        return r.call(null, t);
                    }catch(e){
                        return r.call(this, t);
                    }
                }
            }(t));
        }
    }function d(t, e){
        this.fun=t, this.array=e;
    }function v(){}i.nextTick=function(t){
        let e=new Array(arguments.length-1); if(arguments.length>1){
            for(let n=1; n<arguments.length; n++){
                e[n-1]=arguments[n];
            }
        }c.push(new d(t, e)), 1!==c.length||f||s(p);
    }, d.prototype.run=function(){
        this.fun.apply(null, this.array);
    }, i.title='browser', i.browser=!0, i.env={}, i.argv=[], i.version='', i.versions={}, i.on=v, i.addListener=v, i.once=v, i.off=v, i.removeListener=v, i.removeAllListeners=v, i.emit=v, i.prependListener=v, i.prependOnceListener=v, i.listeners=function(t){
        return[];
    }, i.binding=function(t){
        throw new Error('process.binding is not supported');
    }, i.cwd=function(){
        return'/';
    }, i.chdir=function(t){
        throw new Error('process.chdir is not supported');
    }, i.umask=function(){
        return 0;
    };
}, function(t, e){
    let n=[].slice, r={}.toString; function i(t, e){
        for(let n in e){
            void 0===t[n]&&(t[n]=e[n]);
        }return e;
    }t.exports=function(){
        i(String.prototype, {trim(){
            return this.replace(/^\s+|\s+$/g, '');
        }}), i(Array.prototype, {indexOf(t, e){
            for(let n=e=e||0, r=this.length; n<r; n++){
                if(this[n]===t){
                    return n;
                }
            }return-1;
        }, forEach(t, e){
            let n=0, r=Object(this), i=r.length>>>0; if('function'!=typeof t){
                throw new TypeError(`${t} is not a function`);
            }for(;n<i;){
                var o; n in r&&(o=r[n], t.call(e, o, n, r)), n++;
            }
        }, filter(t, e){
            let n=Object(this), r=n.length>>>0; if('function'!=typeof t){
                throw new TypeError();
            }for(var i=[], o=0; o<r; o++){
                if(o in n){
                    let a=n[o]; t.call(e, a, o, n)&&i.push(a);
                }
            }return i;
        }}), i(Function.prototype, {bind(t){
            let e=this, r=n.call(arguments, 1); return function(){
                let i=r.concat(n.call(arguments)); return e.apply(t, i);
            };
        }}), i(Array, {isArray(t){
            return'[object Array]'===r.call(t);
        }});
    };
}, function(t, e){
    t.exports={quot: 34, amp: 38, apos: 39, lt: 60, gt: 62, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, copy: 169, ordf: 170, laquo: 171, not: 172, shy: 173, reg: 174, macr: 175, deg: 176, plusmn: 177, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, sup1: 185, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, Agrave: 192, Aacute: 193, Acirc: 194, Atilde: 195, Auml: 196, Aring: 197, AElig: 198, Ccedil: 199, Egrave: 200, Eacute: 201, Ecirc: 202, Euml: 203, Igrave: 204, Iacute: 205, Icirc: 206, Iuml: 207, ETH: 208, Ntilde: 209, Ograve: 210, Oacute: 211, Ocirc: 212, Otilde: 213, Ouml: 214, times: 215, Oslash: 216, Ugrave: 217, Uacute: 218, Ucirc: 219, Uuml: 220, Yacute: 221, THORN: 222, szlig: 223, agrave: 224, aacute: 225, acirc: 226, atilde: 227, auml: 228, aring: 229, aelig: 230, ccedil: 231, egrave: 232, eacute: 233, ecirc: 234, euml: 235, igrave: 236, iacute: 237, icirc: 238, iuml: 239, eth: 240, ntilde: 241, ograve: 242, oacute: 243, ocirc: 244, otilde: 245, ouml: 246, divide: 247, oslash: 248, ugrave: 249, uacute: 250, ucirc: 251, uuml: 252, yacute: 253, thorn: 254, yuml: 255, fnof: 402, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, bull: 8226, hellip: 8230, prime: 8242, Prime: 8243, oline: 8254, frasl: 8260, weierp: 8472, image: 8465, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, int: 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, circ: 710, tilde: 732, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, permil: 8240, lsaquo: 8249, rsaquo: 8250, euro: 8364};
}, function(t, e, n){
    let r=n(0), i=/xy/.test(() => {})?/\bsupr\b/:/.*/, o=function(t){
        return'function'==typeof t;
    }; function a(t, e, n){
        return function(){
            let r=this.supr; this.supr=n[t]; let i=e.apply(this, arguments); return this.supr=r, i;
        };
    }let s=['events', 'data', 'computed'], u=s.length; t.exports=function t(e){
        e=e||{}; let n, c=this, f=c&&c.prototype||{}; if('function'==typeof e){
            return n=e.prototype, e.implement=h, e.extend=t, e;
        }function l(){
            c.apply(this, arguments);
        }function h(t){
            for(let e=u; e--;){
                let c=s[e]; t.hasOwnProperty(c)&&n.hasOwnProperty(c)&&(r.extend(n[c], t[c], !0), delete t[c]);
            }return (function(t, e, n){
                for(let r in e){
                    e.hasOwnProperty(r)&&(t[r]=o(e[r])&&o(n[r])&&i.test(e[r])?a(r, e[r], n):e[r]);
                }
            }(n, t, f)), this;
        }return n=r.createProto(l, f), l.implement=h, l.implement(e), c.__after__&&c.__after__.call(l, c, e), l.extend=t, l;
    };
}, function(t, e, n){
    let r=n(11).diffArray, i=n(7), o=n(5), a=(n(10), n(12)), s=n(1), u=n(0), c=t.exports={}; function f(t, e){
        return'object'===e?u.keys(t):'array'===e?t:[];
    }c.list=function(t, e){
        c.Regular; let n, s, l=document.createComment('Regular list'), h=e.namespace, p=e.extra, d=this, v=new a([l]), m=`${t.variable}_index`, g=`${t.variable}_key`, y=t.variable, x=t.alternate, E=t.track; function T(t, e){
            for(let n=0; n<e; n++){
                let r=v.children.splice(t+1, 1)[0]; r&&r.destroy(!0);
            }
        }function _(n, r, a, s){
            for(let c=n; c<r; c++){
                let f={}; w(f, c, a[c], s), f=u.createObject(p, f); let l=d.$compile(t.body, {extra: f, namespace: h, record: !0, outer: e.outer}); l.data=f; let m=i.last(v.get(c)); m.parentNode&&o.inject(i.node(l), m, 'after'), v.children.splice(c+1, 0, l);
            }
        }function w(t, e, n, r){
            t[m]=e, r?(t[g]=n, t[y]=r[n]):(t[y]=n, t[g]=null);
        }function N(t, e, n, r){
            for(let i=t; i<e; i++){
                let o=v.get(i+1), a=n[i]; w(o.data, i, a, r);
            }
        }return E&&!0!==E&&(E=this._touchExpr(E), s=u.createObject(p), n=function(t, e){
            return s[y]=t, s[m]=e, E.get(d, s);
        }), this.$watch(t.sequence, (t, a, s) => {
            let c, g=u.typeOf(t), y=u.typeOf(a), w=f(t, g), b=f(a, y), $=w&&w.length; if((!b||!b.length)&&$&&v.get(1)){
                let S=v.children.pop(); S.destroy&&S.destroy(!0);
            }if('object'===g&&(c=t), !0===E?(function(t, e, n){
                let r=t.length, i=e.length; N(0, Math.min(r, i), t, n), r<i?T(r, i-r):r>i&&_(i, r, t, n);
            }(w, b, c)):(function(t, e, i, o){
                let a=0, s=t.length; if(i||0===s&&0===e.length||(i=r(t, e, !0)), i&&i.length){
                    for(var u=0; u<i.length; u++){
                        let c=i[u], f=c.index, l=c.removed, h=c.add, p=l.length; if(E&&p&&h){
                            for(let d=Math.min(p, h), g=0; g<d;){
                                n(t[f], f)!==n(l[0], f)&&(T(f, 1), _(f, f+1, t, o)), l.shift(), h--, f++, g++;
                            }p=l.length;
                        }N(a, f, t, o), T(f, p), _(f, f+h, t, o), a=(a=f+h-p)<0?0:a;
                    }if(a<s){
                        for(u=a; u<s; u++){
                            v.get(u+1).data[m]=u;
                        }
                    }
                }
            }(w, b, s, c)), !$&&x&&x.length){
                let A=d.$compile(x, {extra: p, record: !0, outer: e.outer, namespace: h}); v.children.push(A), l.parentNode&&o.inject(i.node(A), l, 'after');
            }
        }, {init: !0, diff: !0!==E, deep: !0}), v;
    }, c.template=function(t, e){
        let n, r=t.content, i=document.createComment('inlcude'), o=e.namespace, s=e.extra, u=new a([i]); if(r){
            let c=this; this.$watch(r, (t) => {
                let r=u.get(1), a=typeof t; r&&(r.destroy(!0), u.children.pop()), t&&(u.push(n='function'===a?t():c.$compile('object'!==a?String(t):t, {record: !0, outer: e.outer, namespace: o, extra: s})), i.parentNode&&n.$inject(i, 'before'));
            }, {init: !0});
        }return u;
    }; let l=0; c.if=function(t, e){
        let n, r, s=this, u=e.extra; if(e&&e.element){
            var c=function(o){
                o?(r&&i.destroy(r), t.consequent&&(n=s.$compile(t.consequent, {record: !0, element: e.element, extra: u}))):(n&&i.destroy(n), t.alternate&&(r=s.$compile(t.alternate, {record: !0, element: e.element, extra: u})));
            }; return this.$watch(t.test, c, {force: !0}), {destroy(){
                n?i.destroy(n):r&&i.destroy(r);
            }};
        }let f=document.createComment(`Regular if${l++}`), h=new a(); h.push(f); let p=null, d=e.namespace; c=function(a, c){
            let l=!!a; l!==p&&(p=l, h.children[1]&&(h.children[1].destroy(!0), h.children.pop()), l?t.consequent&&t.consequent.length&&(n=s.$compile(t.consequent, {record: !0, outer: e.outer, namespace: d, extra: u}), h.push(n), f.parentNode&&o.inject(i.node(n), f, 'before')):t.alternate&&t.alternate.length&&(r=s.$compile(t.alternate, {record: !0, outer: e.outer, namespace: d, extra: u}), h.push(r), f.parentNode&&o.inject(i.node(r), f, 'before')));
        }; return this.$watch(t.test, c, {force: !0, init: !0}), h;
    }, c.expression=function(t, e){
        let n=document.createTextNode(''); return this.$watch(t, (t) => {
            s.text(n, null==t?'':`${t}`);
        }, {init: !0}), n;
    }, c.text=function(t, e){
        return document.createTextNode(u.convertEntity(t.text));
    }; let h=/^on-(.+)$/; c.element=function(t, e){
        let n, r, a=t.attrs, f=this.constructor, l=t.children, h=e.namespace, p=e.extra, d=t.tag, v=f.component(d); if('r-content'===d){
            return u.log('r-content is deprecated, use {#inc this.$body} instead (`{#include}` as same)', 'warn'), this.$body&&this.$body();
        }if(v||'r-component'===d){
            return e.Component=v, c.component.call(this, t, e);
        }'svg'===d&&(h='svg'), l&&l.length&&(n=this.$compile(l, {outer: e.outer, namespace: h, extra: p})), r=s.create(d, h, a), n&&!u.isVoidTag(d)&&s.inject(i.node(n), r), t.touched||(a.sort((t, e) => {
            let n=f.directive(t.name), r=f.directive(e.name); return n&&r?(r.priority||1)-(n.priority||1):n?1:r?-1:'type'===e.name?1:-1;
        }), t.touched=!0); let m=function(t, e, n){
            for(var r=[], i=0, o=t.length; i<o; i++){
                let a=this._walk(t[i], {element: e, fromElement: !0, attrs: t, extra: n}); a&&r.push(a);
            }return r;
        }.call(this, a, r, p); return{type: 'element', group: n, node(){
            return r;
        }, last(){
            return r;
        }, destroy(t){
            t?o.remove(r, n?n.destroy.bind(n):u.noop):n&&n.destroy(), m.length&&m.forEach((t) => {
                t&&('function'==typeof t.destroy?t.destroy():t());
            });
        }};
    }, c.component=function(t, e){
        for(var n, r, o, s, c=t.attrs, f=e.Component, l=this.constructor, p=e.extra, d=e.namespace, v=this, m={}, g=0, y=c.length; g<y; g++){
            var x=c[g]; (S=this._touchExpr(void 0===x.value||x.value)).constant&&(S=x.value=S.get(this)), x.value&&!0===x.value.constant&&(S=S.get(this)); var E, T=x.name; if(!x.event){
                let _=T.match(h); _&&(x.event=_[1]);
            }if('cmpl'===x.mdf&&(S=u.getCompileFn(S, this, {record: !0, namespace: d, extra: p, outer: e.outer})), 'is'===T&&!f){
                o=S; let w=this.$get(S, !0); if('function'!=typeof(f=l.component(w))){
                    throw new Error(`component ${w} has not registed!`);
                }
            }(E=x.event)?(s=s||{})[E]=u.handleEvent.call(this, S, E):(T=x.name=u.camelCase(T), 'expression'!==S.type?m[T]=S:m[T]=S.get(v), 'ref'===T&&null!=S&&(r=S), 'isolate'===T&&(n='expression'===S.type?S.get(v):parseInt(!0===S?3:S, 10), m.isolate=n));
        }let N, b={data: m, events: s, $parent: 2&n?null:this, $root: this.$root, $outer: e.outer, _body: {ctx: this, ast: t.children}}, $=(e={namespace: d, extra: e.extra}, new f(b, e)); r&&this.$refs&&(N=f.directive('ref').link, this.$on('$destroy', N.call(this, $, r))), r&&v.$refs&&(v.$refs[r]=$); for(g=0, y=c.length; g<y; g++){
            var S=(x=c[g]).value||!0; T=x.name; 'expression'!==S.type||x.event||(S=v._touchExpr(S), 2&n||this.$watch(S, function(t, e){
                this.data[t]=e;
            }.bind($, T)), !S.set||1&n||$.$watch(T, v.$update.bind(v, S), {sync: !0}));
        }if(o&&'expression'===o.type){
            let A=new a(); return A.push($), this.$watch(o, (t) => {
                let e=l.component(t); if(!e){
                    throw new Error(`component ${t} has not registed!`);
                }let n=new e(b), o=A.children.pop(); A.push(n), n.$inject(i.last(o), 'after'), o.destroy(), r&&(v.$refs[r]=n);
            }, {sync: !0}), A;
        }return $;
    }, c.attribute=function(t, e){
        let n=t, r=n.name, i=n.value||'', o=i.constant, a=this.constructor.directive(r), c=e.element; if(i=this._touchExpr(i), o&&(i=i.get(this)), a&&a.link){
            let f=a.link.call(this, c, i, r, e.attrs); return'function'==typeof f&&(f={destroy: f}), f;
        }if('expression'===i.type?this.$watch(i, (t, e) => {
            s.attr(c, r, t);
        }, {init: !0}):u.isBooleanAttr(r)?s.attr(c, r, !0):s.attr(c, r, i), !e.fromElement){
            return{destroy(){
                s.attr(c, r, null);
            }};
        }
    };
}, function(t, e, n){
    let r=[].slice, i=n(0), o={$on(t, e){
        if('object'==typeof t){
            for(let n in t){
                this.$on(n, t[n]);
            }
        }else{
            let r=this._handles||(this._handles={}); (r[t]||(r[t]=[])).push(e);
        }return this;
    }, $off(t, e){
        if(this._handles){
            t||(this._handles={}); let n, r=this._handles; if(n=r[t]){
                if(!e){
                    return r[t]=[], this;
                }for(let i=0, o=n.length; i<o; i++){
                    if(e===n[i]){
                        return n.splice(i, 1), this;
                    }
                }
            }return this;
        }
    }, $emit(t){
        let e, n=this._handles; if(t){
            let i, o=r.call(arguments, 1); if(!n){
                return this;
            }if(e=n[(i=t).slice(1)]){
                for(var a=0, s=e.length; a<s; a++){
                    e[a].apply(this, o);
                }
            }if(!(e=n[i])){
                return this;
            }let u=0; for(s=e.length; u<s; u++){
                e[u].apply(this, o);
            }return this;
        }
    }, $one(){}}; function a(){}i.extend(a.prototype, o), a.mixTo=function(t){
        t='function'==typeof t?t.prototype:t, i.extend(t, o);
    }, t.exports=a;
}, function(t, e, n){
    let r=n(0), i=n(13).expression, o=n(11), a=o.diffArray, s=o.diffObject; function u(){}let c={$watch(t, e, n){
        let o, a, s, u, c=this.__ext__; this._watchers||(this._watchers=[]), !0===(n=n||{})&&(n={deep: !0}); let f=r.uid('w_'); if(Array.isArray(t)){
            for(var l=[], h=0, p=t.length; h<p; h++){
                l.push(this.$expression(t[h]).get);
            }let d=[]; s=function(t){
                for(var e=!0, n=0, i=l.length; n<i; n++){
                    let o=l[n](t, c); r.equals(o, d[n])||(e=!1, d[n]=r.clone(o));
                }return!e&&d;
            };
        }else{
            'function'==typeof t?o=t.bind(this):(o=(t=this._touchExpr(i(t))).get, a=t.once);
        } let v={id: f, get: o, fn: e, once: a, force: n.force, diff: n.diff, test: s, deep: n.deep, last: n.sync?o(this):n.last}; if(this._watchers.push(v), (u=this._records&&this._records.length)&&this._records[u-1].push(f), !0===n.init){
            let m=this.$phase; this.$phase='digest', this._checkSingleWatch(v, this._watchers.length-1), this.$phase=m;
        }return v;
    }, $unwatch(t){
        if(t=t.uid||t, this._watchers||(this._watchers=[]), Array.isArray(t)){
            for(let e=0, n=t.length; e<n; e++){
                this.$unwatch(t[e]);
            }
        }else{
            let r, i, o=this._watchers; if(!t||!o||!(i=o.length)){
                return;
            }for(;i--;){
                (r=o[i])&&r.id===t&&o.splice(i, 1);
            }
        }
    }, $expression(t){
        return this._touchExpr(i(t));
    }, $digest(){
        if('digest'!==this.$phase&&!this._mute){
            this.$phase='digest'; for(var t=0; this._digest();){
                if(++t>20){
                    throw Error('there may a circular dependencies reaches');
                }
            }t>0&&this.$emit&&this.$emit('$update'), this.$phase=null;
        }
    }, _digest(){
        let t, e, n=this._watchers, r=!1; if(n&&n.length){
            for(let i=0, o=n.length; i<o; i++){
                e=n[i], this._checkSingleWatch(e, i)&&(r=!0);
            }
        }if((t=this._children)&&t.length){
            for(let a=0, s=t.length; a<s; a++){
                let u=t[a]; u&&u._digest()&&(r=!0);
            }
        }return r;
    }, _checkSingleWatch(t, e){
        let n=!1; if(t){
            let i, o, u, c, f; if(t.test){
                let l=t.test(this); l&&(n=!0, t.fn.apply(this, l));
            }else {
                i=t.get(this), o=t.last, u=r.typeOf(o), !0, 'object'===(c=r.typeOf(i))&&'object'===u&&t.deep?(!0===(f=s(i, o, t.diff))||f.length)&&(n=!0):'array'!==c||'undefined'!=u&&'array'!==u?r.equals(i, o)&&!t.force||(t.force=null, n=!0):(f=a(i, t.last||[], t.diff), ('array'!==u||!0===f||f.length)&&(n=!0));
            }return n&&!t.test&&('object'===c&&t.deep||'array'===c?t.last=r.clone(i):t.last=i, t.fn.call(this, i, o, f), t.once&&this._watchers.splice(e, 1)), n;
        }
    }, $set(t, e){
        if(null!=t){
            let n=r.typeOf(t); if('string'===n||'expression'===t.type){
                (t=this.$expression(t)).set(this, e);
            }else if('function'===n){
                t.call(this, this.data);
            }else {
                for(let i in t){
                    this.$set(i, t[i]);
                }
            }
        }
    }, $get(t, e){
        return e&&'string'==typeof t?t:this.$expression(t).get(this);
    }, $update(){
        let t=this; do{
            if(t.data.isolate||!t.$parent){
                break;
            }t=t.$parent;
        }while(t);let e=t.$phase; return t.$phase='digest', this.$set.apply(this, arguments), t.$phase=e, t.$digest(), this;
    }, _record(){
        this._records||(this._records=[]), this._records.push([]);
    }, _release(){
        return this._records.pop();
    }}; r.extend(u.prototype, c), u.mixTo=function(t){
        return t='function'==typeof t?t.prototype:t, r.extend(t, c);
    }, t.exports=u;
}, function(t, e){
    let n=t.exports={}; n.json={get(t){
        return'undefined'!=typeof JSON?JSON.stringify(t):t;
    }, set(t){
        return'undefined'!=typeof JSON?JSON.parse(t):t;
    }}, n.last=function(t){
        return t&&t[t.length-1];
    }, n.average=function(t, e){
        return(t=t||[]).length?n.total(t, e)/t.length:0;
    }, n.total=function(t, e){
        let n=0; if(t){
            return t.forEach((t) => {
                n+=e?t[e]:t;
            }), n;
        }
    };
}, function(t, e, n){
    let r=n(0), i=n(1), o=(n(5), n(2)), a=n(28); n(29), n(30), t.exports={'r-class': function(t, e){
        'string'==typeof e&&(e=r.fixObjStr(e)), this.$watch(e, (e) => {
            let n=` ${t.className.replace(/\s+/g, ' ')} `; for(let r in e){
                e.hasOwnProperty(r)&&(n=n.replace(` ${r} `, ' '), !0===e[r]&&(n+=`${r} `));
            }t.className=n.trim();
        }, !0);
    }, 'r-style': function(t, e){
        'string'==typeof e&&(e=r.fixObjStr(e)), this.$watch(e, (e) => {
            for(let n in e){
                e.hasOwnProperty(n)&&i.css(t, n, e[n]);
            }
        }, !0);
    }, 'r-hide': function(t, e){
        let n, i=null; r.isExpr(e)||'string'==typeof e?this.$watch(e, (e) => {
            let r=!!e; r!==i&&(i=r, r?t.onleave?n=t.onleave(() => {
                t.style.display='none', n=null;
            }):t.style.display='none':(n&&n(), t.style.display='', t.onenter&&t.onenter()));
        }):e&&(t.style.display='none');
    }, 'r-html': function(t, e){
        this.$watch(e, (e) => {
            e=e||'', i.html(t, e);
        }, {force: !0});
    }, ref: {accept: a.COMPONENT_TYPE+a.ELEMENT_TYPE, link(t, e){
        let n, i=this.$refs||(this.$refs={}); return r.isExpr(e)?this.$watch(e, (e, r) => {
            n=e, i[r]===t&&(i[r]=null), n&&(i[n]=t);
        }):i[n=e]=t, function(){
            i[n]=null;
        };
    }}}, o.directive(t.exports);
}, function(t, e){
    t.exports={COMPONENT_TYPE: 1, ELEMENT_TYPE: 2};
}, function(t, e, n){
    let r=n(0), i=n(1), o=n(2); o._addProtoInheritCache('event'), o.directive(/^on-\w+$/, function(t, e, n, r){
        if(n&&e){
            let i=n.split('-')[1]; return this._handleEvent(t, i, e, r);
        }
    }), o.directive(/^(delegate|de)-\w+$/, function(t, e, n){
        let o=this.$root, a=o._delegates||(o._delegates={}); if(n&&e){
            var s=n.split('-')[1], u=r.handleEvent.call(this, e, s); a[s]||(a[s]=[], o.parentNode?i.on(o.parentNode, s, f):o.$on('$inject', function(t, e, n){
                let r=this.parentNode; n&&i.off(n, s, f), r&&i.on(this.parentNode, s, f);
            }), o.$on('$destroy', () => {
                o.parentNode&&i.off(o.parentNode, s, f), a[s]=null;
            })); let c={element: t, fire: u}; return a[s].push(c), function(){
                let t=a[s]; if(t&&t.length){
                    for(let e=0, n=t.length; e<n; e++){
                        t[e]===c&&t.splice(e, 1);
                    }
                }
            };
        }function f(t){
            !(function(t, e, n){
                if(!n){
                    return;
                }let r, i=t.target; for(;i&&i!==n;){
                    for(let o=0, a=e.length; o<a; o++){
                        (r=e[o])&&r.element===i&&r.fire(t);
                    }i=i.parentNode;
                }
            }(t, a[s], o.parentNode));
        }
    });
}, function(t, e, n){
    let r=n(0), i=n(1), o=n(2), a={text(t, e){
        let n=this, o=this.$watch(e, (e) => {
                t.value!==e&&(t.value=null==e?'':`${e}`);
            }), a=function(t){
                let i=this; if('cut'===t.type||'paste'===t.type){
                    r.nextTick(() => {
                        let t=i.value; e.set(n, t), o.last=t, n.$update();
                    });
                }else{
                    let a=i.value; e.set(n, a), o.last=a, n.$update();
                }
            }; 9!==i.msie&&'oninput'in i.tNode?t.addEventListener('input', a):(i.on(t, 'paste', a), i.on(t, 'keyup', a), i.on(t, 'cut', a), i.on(t, 'change', a)); void 0===e.get(n)&&t.value&&e.set(n, t.value); return function(){
            9!==i.msie&&'oninput'in i.tNode?t.removeEventListener('input', a):(i.off(t, 'paste', a), i.off(t, 'keyup', a), i.off(t, 'cut', a), i.off(t, 'change', a));
        };
    }, select(t, e){
        let n=this, o=this.$watch(e, (e) => {
            let n=r.slice(t.getElementsByTagName('option')); n.forEach((n, r) => {
                n.value==e&&(t.selectedIndex=r);
            });
        }); function a(){
            e.set(n, this.value), o.last=this.value, n.$update();
        }i.on(t, 'change', a), void 0===e.get(n)&&t.value&&e.set(n, t.value); return function(){
            i.off(t, 'change', a);
        };
    }, checkbox(t, e){
        let n=this, r=this.$watch(e, (e) => {
                i.attr(t, 'checked', !!e);
            }), o=function(){
                let t=this.checked; e.set(n, t), r.last=t, n.$update();
            }; e.set&&i.on(t, 'change', o); void 0===e.get(n)&&e.set(n, !!t.checked); return function(){
            e.set&&i.off(t, 'change', o);
        };
    }, radio(t, e){
        let n=this, r=(this.$watch(e, (e) => {
            e==t.value?t.checked=!0:t.checked=!1;
        }), function(){
            let t=this.value; e.set(n, t), n.$update();
        }); e.set&&i.on(t, 'change', r); void 0===e.get(n)&&t.checked&&e.set(n, t.value); return function(){
            e.set&&i.off(t, 'change', r);
        };
    }}; o.directive('r-model', function(t, e){
        let n=t.tagName.toLowerCase(), r=n; return'input'===r?r=t.type||'text':'textarea'===r&&(r='text'), 'string'==typeof e&&(e=this.$expression(e)), a[r]?a[r].call(this, t, e):'input'===n?a.text.call(this, t, e):void 0;
    });
}, function(t, e, n){
    let r=n(0), i=n(5), o=(n(1), n(2)), a=/\s+/, s='when', u='on'; function c(t, e){
        let n=this.constructor; r.isExpr(e)&&(e=e.get(this)); let i, o, a, c, f=(e=e.trim()).split(';'), l=[], h=[]; function p(t){
            i&&l.push(i), i=(function(t){
                var e, n=[], i=0, o=r.noop, a={type: t, start(t){
                    return e=r.uid(), 'function'==typeof t&&(o=t), i>0?i=0:a.step(), a.compelete;
                }, compelete(){
                    e=null, o&&o(), o=r.noop, i=0;
                }, step(){
                    n[i]&&n[i](a.done.bind(a, e));
                }, done(t){
                    t===e&&(i<n.length-1?(i++, a.step()):a.compelete());
                }, push(t){
                    n.push(t);
                }}; return a;
            }(t));
        }function d(t, e){
            e&&t();
        }function v(t){
            return function(){
                t.onenter=null, t.onleave=null;
            };
        }for(let m=0, g=f.length; m<g; m++){
            if(o=(c=f[m].split(':'))[0]&&c[0].trim(), a=c[1]&&c[1].trim(), o){
                if(o!==s){
                    if(o!==u){
                        var y; if(!(y=n.animation(o))||!i){
                            throw Error(y?'you should start with `on` or `event` in animation':`undefined animator 【${o}】`);
                        }i.push(y.call(this, {element: t, done: i.done, param: a}));
                    }else {
                        p(a), 'leave'===a?(t.onleave=i.start, h.push(v(t))):'enter'===a?(t.onenter=i.start, h.push(v(t))):`on${a}` in t?h.push(this._handleEvent(t, a, i.start)):(this.$on(a, i.start), h.push(this.$off.bind(this, a, i.start)));
                    }
                }else {
                    p('when'), this.$watch(a, d.bind(this, i.start));
                }
            }
        }if(h.length){
            return function(){
                h.forEach((t) => {
                    t();
                });
            };
        }
    }o._addProtoInheritCache('animation'), o.animation({wait(t){
        let e=parseInt(t.param)||0; return function(t){
            setTimeout(t, e);
        };
    }, class(t){
        let e=t.param.split(','), n=e[0]||'', r=parseInt(e[1])||1; return function(e){
            i.startClassAnimate(t.element, n, e, r);
        };
    }, call(t){
        let e=this.$expression(t.param).get, n=this; return function(t){
            e(n), n.$update(), t();
        };
    }, emit(t){
        let e=t.param.split(','), n=e[0]||'', r=e[1]?this.$expression(e[1]).get:null; if(!n){
            throw Error('you shoud specified a eventname in emit command');
        }let i=this; return function(t){
            i.$emit(n, r?r(i):void 0), t();
        };
    }, style(t){
        let e, n={}; return t.param.split(',').forEach((t) => {
            if(t=t.trim()){
                let r=t.split(a), i=r.shift(), o=r.join(' '); if(!i||!o){
                    throw Error('invalid style in command: style');
                }n[i]=o, e=!0;
            }
        }), function(r){
            e?i.startStyleAnimate(t.element, n, r):r();
        };
    }}), o.directive('r-animation', c), o.directive('r-anim', c);
}, function(t, e, n){
    let r=n(2); function i(t){
        t.implement({$timeout(t, e){
            return e=e||0, setTimeout(() => {
                t.call(this), this.$update();
            }, e);
        }, $interval(t, e){
            return e=e||1e3/60, setInterval(() => {
                t.call(this), this.$update();
            }, e);
        }});
    }r.plugin('timeout', i), r.plugin('$timeout', i);
}, function(t, e, n){
    'use strict'; n.r(e); let r=n(14), i=function(){
            let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}, e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}, n=arguments[2]; for(let r in e){
                (void 0===t[r]||n)&&(t[r]=e[r]);
            }return t;
        }, o=n.n(r).a.extend({config(t){
            this.supr(t);
        }}).use((t) => {
            t.implement({defaults(t){
                i(this.data, t);
            }, rules(t){
                i(this.data, {rules: t});
            }, templates(t){
                i(this.data, {templates: t});
            }});
        }); e.default=o.extend({template: '<h1>Hello, {#include this.$body}</h1>', config(t){
        this.defaults({}), this.supr(t);
    }});
}]));