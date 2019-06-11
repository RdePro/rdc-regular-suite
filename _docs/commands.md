---
title: 支持命令
subTitle: Scripts
order: 10
---

### 支持命令

> rde serve

&emsp;&emsp;本地开发调试组件使用，serve的是__tests__/main.js文件，可以修改该文件查看效果

> rde build

&emsp;&emsp;build会在app目录下生成dist文件，如果需要可以查看，发布会自动发布这个文件

> rde lint

&emsp;&emsp;lint并fix全工程

> rde run release

&emsp;&emsp;发包到npm，请在app下维护好package.json的name和version，以及对应发包需要配置的依赖

发布操作步骤：

* 在app目录下新建package.json，如果不存在该文件

* 填写对应的name和version

* 在rda.config.js中的render中，配置lib属性为包的libName， 会作为vue-cli-service --name={{lib}} 使用

* rde run release, 因为默认发布的是网易源，需要输入对应的网易npm的账号验证

* 如果没有网易源发布权限，可以在app目录下新增.npmrc更换registry，这个文件会覆盖默认的.npmrc
