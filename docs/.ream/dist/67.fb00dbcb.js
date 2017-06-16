webpackJsonp([67],{171:function(s,v,t){s.exports=t(450)},286:function(s,v,t){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={head:{title:" 升级到 vux@2.x"}}},450:function(s,v,t){var _=t(4)(t(286),t(541),null,null,null);_.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/upgrade-to-vux2-148.vue",_.esModule&&Object.keys(_.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),_.options.functional&&console.error("[vue-loader] upgrade-to-vux2-148.vue: functional components are not supported with templates, they should use render functions."),s.exports=_.exports},541:function(s,v,t){s.exports={render:function(){var s=this,v=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,v=s.$createElement,t=s._self._c||v;return t("div",[t("h1",[s._v("升级到 vux@2.x")]),s._v(" "),t("h3",[s._v("Vue@2.x 主要变更")]),s._v(" "),t("p",[s._v("参考"),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/migration.html"}},[s._v("Vue官方文档")]),s._v("进行迁移, 这也是Vux组件的代码更新部分，主要包括：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v(":value.sync")]),s._v(" 已经废弃")]),s._v(" "),t("li",[t("code",[s._v("broadcast")]),s._v(" 方法已经废弃")]),s._v(" "),t("li",[t("code",[s._v("@click")]),s._v(" 需要更改为 "),t("code",[s._v("@click.native")])]),s._v(" "),t("li",[t("code",[s._v("v-for")]),s._v("的"),t("code",[s._v("(index, item)")]),s._v(" => "),t("code",[s._v("(item, index)")])])]),s._v(" "),t("h3",[s._v("vue-router 更新")]),s._v(" "),t("p",[s._v("配合vue2, "),t("code",[s._v("vue-router")]),s._v("同样需要更新到2.0版本以上")]),s._v(" "),t("p",[s._v("原来的路由配置修改为：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" routes = [{\n  "),t("span",{staticClass:"hljs-attr"},[s._v("path")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'/vux/2.0'")]),s._v(",\n  "),t("span",{staticClass:"hljs-attr"},[s._v("component")]),s._v(": Vux2Demo\n}]\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" router = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" VueRouter({\n  routes\n})\n\n")])]),s._v(" "),t("p",[s._v("原来的路由挂载修改为：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n  router,\n  "),t("span",{staticClass:"hljs-attr"},[s._v("render")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("h")]),s._v(" =>")]),s._v(" h(App)\n}).$mount("),t("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(")\n")])]),s._v(" "),t("p",[t("code",[s._v("go")]),s._v(" 已经不是过去的 "),t("code",[s._v("go")]),s._v("了，要用"),t("code",[s._v("push")]),s._v("方法来跳转")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$router.go("),t("span",{staticClass:"hljs-string"},[s._v("'/somewhere'")]),s._v(")\n")])]),s._v(" "),t("p",[t("code",[s._v("v-link")]),s._v("也废弃了，使用"),t("code",[s._v("router-link")]),s._v("组件来代替")]),s._v(" "),t("p",[s._v("其他请参考官方升级文档: "),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/migration-vue-router.html"}},[s._v("https://cn.vuejs.org/v2/guide/migration-vue-router.html")])]),s._v(" "),t("h3",[s._v("不再生成"),t("code",[s._v("umd")]),s._v("文件")]),s._v(" "),t("p",[s._v("但是你可以使用"),t("code",[s._v("npm run build-components")]),s._v("来生成，请参考文档首页。")]),s._v(" "),t("h3",[s._v("双向绑定修改为 "),t("code",[s._v("v-model")])]),s._v(" "),t("p",[s._v("所有相关Vux调用的 "),t("code",[s._v(":value.sync")]),s._v("都需要更改成 "),t("code",[s._v("v-model")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// 0.x")]),s._v("\n<component :value.sync="),t("span",{staticClass:"hljs-string"},[s._v('"someValue"')]),s._v(">"),t("span",{staticClass:"xml"},[t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("component")]),s._v(">")])]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 2.x")]),s._v("\n<component v-model="),t("span",{staticClass:"hljs-string"},[s._v('"someValue"')]),s._v(">"),t("span",{staticClass:"xml"},[t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("component")]),s._v(">")])]),s._v("\n")])]),s._v(" "),t("h3",[s._v("使用 vux-loader")]),s._v(" "),t("p",[s._v("原来你可能在webpack中做了这样的配置以正确编译vux的js源码：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n  "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/vux.src.*?js$/")]),s._v(",\n  "),t("span",{staticClass:"hljs-attr"},[s._v("loader")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'babel'")]),s._v("\n}\n")])]),s._v(" "),t("p",[s._v("或者你也可能使用了低版本"),t("code",[s._v("vux-loader")]),s._v("的"),t("code",[s._v("getBabelLoader")]),s._v("方法。")]),s._v(" "),t("p",[s._v("现在你可以直接删除这一句了，直接使用vux-loader。")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("webpack.base.conf.js")]),s._v("中这样配置：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" vuxLoader = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'vux-loader'")]),s._v(")\n"),t("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = vuxLoader.merge(webpackConfig, {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("options")]),s._v(": {},\n  "),t("span",{staticClass:"hljs-attr"},[s._v("plugins")]),s._v(": [\n    {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'vux-ui'")]),s._v("\n    }\n  ]\n})\n")])]),s._v(" "),t("h3",[s._v("引入方式变更")]),s._v(" "),t("p",[s._v("原来你可能是单个组件引入，现在在"),t("code",[s._v("vux-loader")]),s._v("的支持下你可以直接这样写：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Group, Cell } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("组件名字变更")]),s._v(" "),t("p",{staticClass:"tip"},[s._v("\n  为什么不参照其他组件库全部加上`X`前缀，主要是因为觉得总要写个`X`相当不顺手。\n")]),s._v(" "),t("p",[s._v("因Vue2.0限制组件名不能与原有的html5标签一样，因此部分组件进行了重命名，加上 "),t("code",[s._v("x-")]),s._v("前缀，所有需要加前缀的组件如下：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Progress")]),s._v(" => "),t("code",[s._v("XProgress")])]),s._v(" "),t("li",[t("code",[s._v("Switch")]),s._v(" => "),t("code",[s._v("XSwitch")])]),s._v(" "),t("li",[t("code",[s._v("Dialog")]),s._v(" => "),t("code",[s._v("XDialog")])]),s._v(" "),t("li",[t("code",[s._v("Address")]),s._v(" => "),t("code",[s._v("XAddress")])]),s._v(" "),t("li",[t("code",[s._v("Circle")]),s._v(" => "),t("code",[s._v("XCircle")])]),s._v(" "),t("li",[t("code",[s._v("XButton")])]),s._v(" "),t("li",[t("code",[s._v("XImg")])]),s._v(" "),t("li",[t("code",[s._v("XInput")])]),s._v(" "),t("li",[t("code",[s._v("XTextarea")])]),s._v(" "),t("li",[t("code",[s._v("XHeader")])])]),s._v(" "),t("h3",[s._v("各个组件变更：")]),s._v(" "),t("h4",[s._v("Swiper 引入路径变化")]),s._v(" "),t("p",[s._v("目录结构变化，与其他有子组件的统一，导致引入方式变化：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// 0.x")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Swiper "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux/src/components/swiper'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" SwiperItem "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux/src/components/swiper-item'")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 2.0")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Swiper "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux/src/components/swiper/swiper'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" SwiperItem "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux/src/components/swiper/swiper-item'")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 或者")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Swiper, SwiperItem } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux/src/components/swiper'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// with vux-loader")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("ColorPicker 废弃")]),s._v(" "),t("p",{staticClass:"tip"},[s._v("\n  `2.0.0`可用用，但是后面不再维护。\n")]),s._v(" "),t("p",[s._v("这个组件可以由"),t("code",[s._v("cell")]),s._v("配合"),t("code",[s._v("slot")]),s._v("扩展出来，而且更灵活。没有做过统计，但是感觉使用人数应该挺少。")]),s._v(" "),t("h4",[s._v("Countdown 废弃")]),s._v(" "),t("p",{staticClass:"tip"},[s._v("\n  `2.0.0`可用，但是后面不再维护。\n")]),s._v(" "),t("p",[s._v("功能薄弱，比较鸡肋。")]),s._v(" "),t("h4",[s._v("Scroller reset方法更新")]),s._v(" "),t("p",[s._v("由于 Vue@2.x 的"),t("code",[s._v("broadcast")]),s._v("方法已经废弃，并且之前的设计也并不是很好，uuid的绑定也其实是没必要的。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("reset方法变成使用ref的"),t("code",[s._v("reset()")]),s._v("方法")])]),s._v(" "),t("li",[t("p",[s._v("pullup reset 变成 ref 的 "),t("code",[s._v("donePullup()")]),s._v("方法")])]),s._v(" "),t("li",[t("p",[s._v("pullup disable 变成 ref 的 "),t("code",[s._v("disablePullup()")]),s._v("方法")])]),s._v(" "),t("li",[t("p",[s._v("pullup enable 变成 ref 的 "),t("code",[s._v("enablePullup()")]),s._v("方法")])]),s._v(" "),t("li",[t("p",[s._v("pulldown reset 变成 ref 的 "),t("code",[s._v("donePulldown()")]),s._v("方法")])]),s._v(" "),t("li",[t("p",[s._v("pullup和pulldown的status绑定变成"),t("code",[s._v('v-model="status"')]),s._v("绑定，示例")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("status: {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("pullupStatus")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'default'")]),s._v(",\n  "),t("span",{staticClass:"hljs-attr"},[s._v("pulldownStatus")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'default'")]),s._v("\n}\n")])])])]),s._v(" "),t("p",[s._v("详细参照"),t("a",{attrs:{href:"#","router-link":"/zh-CN/components?id=scroller"}},[s._v("Scroller文档")]),s._v("进行更新")]),s._v(" "),t("h4",[s._v("表单默认required为true")]),s._v(" "),t("p",[s._v("保持和"),t("code",[s._v("html")]),s._v("规范一致, 影响的组件有 "),t("code",[s._v("XInput")]),s._v(" "),t("code",[s._v("Checklist")])]),s._v(" "),t("h4",[s._v("Checklist 不显示错误提示")]),s._v(" "),t("p",[s._v("考虑到错误样式目前并不优雅，而用户有自定义错误样式的需要，因此处理成emit一个错误事件+底部slot， 用户可自行处理。")]),s._v(" "),t("h4",[s._v("XInput 的valid获取")]),s._v(" "),t("p",[s._v("由于Vue2的$ref不再是响应的，因此不能直接在模板中通过ref调用组件的valid值(会报undefined)，所以需要变成在提交时再进行ref来获取valid值。")]),s._v(" "),t("h4",[s._v("XAddress 默认地址数据更新")]),s._v(" "),t("p",[s._v("目前引用方式：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { XAddress, ChinaAddressData } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n")])]),s._v(" "),t("p",[s._v("如果你想继续使用旧版本数据")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { XAddress, ChinaAddressV1Data } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n")])]),s._v(" "),t("p",[s._v("按照"),t("a",{attrs:{href:"http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201608/t20160809_1386477.html"}},[s._v("最新统计局数据")]),s._v("进行更新，部分区域已经不存在，部分id做了更新。因此请"),t("em",[s._v("谨慎")]),s._v("更新，评估后端数据存储设计和前端交互再进行更新，避免错误更新用户数据或者导致数据丢失。")]),s._v(" "),t("p",[s._v("完整更新如下图:")]),s._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://github.com/airyland/china-area-data/raw/master/v2.0.0.changes.png",alt:""}})])])}]},s.exports.render._withStripped=!0}});
//# sourceMappingURL=67.fb00dbcb.js.map