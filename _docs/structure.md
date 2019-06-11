---
title: 工程结构
subTitle: Structure
order: 11
---

### 工程结构

&emsp;&emsp;创建后会生成如下结构的RDA结构:

&emsp;&emsp;![](https://haitao.nos.netease.com/16c75437-4efd-4524-9894-59678bdb2e98_277_377.jpg)

```table
文件/目录 [@th width:80px]
说明
|- \_\_tests__
| 本地调试目录，非单测目录
|- components
| 组件目录
|- directives
| vue指令
|- dist
| 运行rde build后会在app目录下生成dist目录，如果有特殊需求，可以使用该目录
|- filters
| 过滤器
|- mixins
| mixins
|- styles
| 样式目录
|- utils
| util方法
|- index.js
| 整个套件的入口文件
```
