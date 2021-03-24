(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{284:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"webservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webservice","aria-hidden":"true"}},[a._v("#")]),a._v(" WebService")]),a._v(" "),s("h3",{attrs:{id:"访问的必要条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问的必要条件","aria-hidden":"true"}},[a._v("#")]),a._v(" 访问的必要条件")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" nameSpace "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MethodName")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" WSDL_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" soapAction "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" nameSpace"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("methodName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("1,指定命名空间和调用的方法名")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SoapObject")]),a._v(" rpc "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SoapObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("nameSpace "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" methodsName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("2.设置参数")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addPropery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wordKey"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("3.指定soap协议版本号")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SoapSerializationEnvelope")]),a._v(" envelope "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SoapSerializationEnvelope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SoapEnvelope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("VER11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("4.设置输出")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("envelope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bodyOut "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" rpc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//设置允许.net")]),a._v("\nenvelope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dotNet"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nenvelope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setOutputSoapObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建HttpTransportSE 对象")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HttpTransportSE")]),a._v(" se "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HttpTransportSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("WSDL_URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//调用call方法")]),a._v("\nse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("soapAction "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("envelope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获得访问结果")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SoapObject")]),a._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" envelope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bodyIn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("解析数据")])])},[],!1,null,null,null);t.default=e.exports}}]);