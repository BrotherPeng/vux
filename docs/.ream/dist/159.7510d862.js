webpackJsonp([159],{194:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={head:{}}},358:function(s,a,t){var l=t(4)(t(194),t(594),null,null,null);l.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/actionsheet-52.vue",l.esModule&&Object.keys(l.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] actionsheet-52.vue: functional components are not supported with templates, they should use render functions."),s.exports=l.exports},594:function(s,a,t){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h3",[s._v("Actionsheet_COM")]),s._v(" "),t("img",{attrs:{width:"100",src:"http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Factionsheet"}}),s._v(" "),s._m(0),s._v(" "),t("hr"),s._v(" "),t("h4",[s._v("演示")]),s._v(" "),t("div",{staticStyle:{width:"377px",height:"667px",display:"inline-block",border:"1px dashed #ececec","border-radius":"5px",overflow:"hidden"}},[t("iframe",{attrs:{src:"https://vux.li/demos/v2/#/component/actionsheet",width:"375",height:"667",border:"0",frameborder:"0"}})],1),s._v(" "),t("h4",[s._v("demo 代码")]),s._v(" "),t("p",{staticClass:"tip"},[s._v("下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。")]),s._v(" "),s._m(1),s._v(" "),t("h4",[s._v("Github Issue")])])},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("a",{staticStyle:{"font-size":"12px",color:"#888"},attrs:{href:"https://vux.li/demos/v2/#/component/actionsheet",target:"_blank"}},[s._v("demo 原始链接：https://vux.li/demos/v2/#/component/actionsheet")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('Basic Usage')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show1"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('Show cancel menu')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show2"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('menu as tips')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show3"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('Array menu')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show5"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('prevent closing when clicking mask')\"")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('Basic Usage')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show4"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-switch")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show4"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":menus")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"menus1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":close-on-clicking-mask")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("show-cancel")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":menus")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"menus1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-click-menu")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show2"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":menus")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"menus2"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-click-menu")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("show-cancel")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show3"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":menus")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"menus3"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-click-menu")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-click-menu-delete")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"onDelete"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("show-cancel")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"show5"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":menus")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"menus5"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("show-cancel")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-click-menu")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("actionsheet")]),s._v(">")]),s._v("\n    \n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("toast")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"showSuccess"')]),s._v(">")]),t("span",[s._v("{{")]),s._v("$t('Deleted~') "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("toast")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Actionsheet, Group, XSwitch, Toast } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    Actionsheet,\n    Group,\n    XSwitch,\n    Toast\n  },\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("show1")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("menus1")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("menu1")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Share to friends'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("menu2")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Share to timeline'")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-attr"},[s._v("show2")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("menus2")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("menu1")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Take Photo'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("menu2")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Choose from photos'")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-attr"},[s._v("show3")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("show4")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("show5")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("menus5")]),s._v(": [{\n        "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Are you sure?<br/><span style=\"color:#666;font-size:12px;\">Once deleted, you will never find it.</span>'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'info'")]),s._v("\n      }, {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Primary'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'primary'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'primary'")]),s._v("\n      }, {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Warn'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'warn'")]),s._v("\n      }, {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Disabled'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'disabled'")]),s._v("\n      }, {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Default'")]),s._v("\n      }],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("showSuccess")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("menus3")]),s._v(": {\n        "),t("span",{staticClass:"hljs-string"},[s._v("'title.noop'")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Are you sure?<br/><span style=\"color:#666;font-size:12px;\">Once deleted, you will never find it.</span>'")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("delete")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'<span style=\"color:red\">Delete</span>'")]),s._v("\n      }\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    click (key) {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(key)\n    },\n    onDelete () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".showSuccess = "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".popup0")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("padding-bottom")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("15px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("200px")]),s._v(";\n}\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".popup1")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n\n")])])}]},s.exports.render._withStripped=!0},73:function(s,a,t){s.exports=t(358)}});
//# sourceMappingURL=159.7510d862.js.map