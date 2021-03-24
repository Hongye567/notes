(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{306:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://www.charlesproxy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Charles"),r("OutboundLink")],1),t._v(" / "),r("a",{attrs:{href:"https://www.telerik.com/fiddler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fiddler"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开发工具"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://itunes.apple.com/cn/app/ihosts-%E7%BC%96%E8%BE%91%E7%A5%9E%E5%99%A8/id1102004240?mt=12",target:"_blank",rel:"noopener noreferrer"}},[t._v("iHosts"),r("OutboundLink")],1),t._v(" / "),r("a",{attrs:{href:"https://github.com/oldj/SwitchHosts",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwitchHosts"),r("OutboundLink")],1),t._v("（可选）")])]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Charles")]),t._v("\nbrew cask "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" charles\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SwitchHosts")]),t._v("\nbrew cask "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" switchhosts\n")])])]),r("h2",{attrs:{id:"代理且重定向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理且重定向","aria-hidden":"true"}},[t._v("#")]),t._v(" 代理且重定向")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("配置 Charles")]),t._v(" "),r("p",[t._v("设置重定向，打开菜单 "),r("strong",[t._v("Tools")]),t._v(" > "),r("strong",[t._v("Map Remote")]),t._v("，☑️ "),r("strong",[t._v("Enable Map Remote")]),t._v("，")]),t._v(" "),r("p",[t._v("From："),r("em",[t._v("https://wechat-web.funxi.cn:443")])]),t._v(" "),r("p",[t._v("To: "),r("em",[t._v("https://127.0.0.1:443")]),t._v(" （测试为： "),r("em",[t._v("https://119.23.226.83:443")]),t._v(" ）")]),t._v(" "),r("p",[t._v("安装 Charles 安全证书，打开菜单 "),r("strong",[t._v("Help")]),t._v(" > "),r("strong",[t._v("SSL Proxying")]),t._v(" > "),r("strong",[t._v("Install Charles Root Certificate")]),t._v("。")]),t._v(" "),r("p",[t._v("查看本机 IP，"),r("strong",[t._v("Help")]),t._v(" > "),r("strong",[t._v("Local IP address")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("修改 Host")]),t._v(" "),r("p",[t._v("打开 SwitchHosts，开启 "),r("strong",[t._v("My hosts")]),t._v(" 或新建一项，添加如下内容")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("127.0.0.1 wechat-web.funxi.cn\n")])])])]),t._v(" "),r("li",[r("p",[t._v("配置微信开发者工具")]),t._v(" "),r("p",[t._v("设置代理，"),r("strong",[t._v("设置")]),t._v(" > "),r("strong",[t._v("代理设置")]),t._v("，☑️ "),r("strong",[t._v("手动设置代理")]),t._v("，代理为："),r("em",[t._v("127.0.0.1:8888")])])]),t._v(" "),r("li",[r("p",[t._v("手机设置代理")]),t._v(" "),r("p",[t._v("手机和 PC 保证在同一个局域网，打开 Charles，"),r("strong",[t._v("Help")]),t._v(" > "),r("strong",[t._v("SSL Proxying")]),t._v(" > "),r("strong",[t._v("Install Charles Root Certificate On a Mobile Device or Remote Browser")]),t._v("，根据提示安装证书。")]),t._v(" "),r("p",[t._v("然后在 WIFI 中设置代理，代理为上述查询到的 IP，端口为 "),r("em",[t._v("8888")]),t._v("。")]),t._v(" "),r("p",[t._v("⚠️ iOS 10 及以后版本需要进入 "),r("strong",[t._v("设置")]),t._v(" > "),r("strong",[t._v("通用")]),t._v(" > "),r("strong",[t._v("关于本机")]),t._v(" > "),r("strong",[t._v("证书信用设置")]),t._v(" 中信任 Charles 证书后才能使用。")])])])])},[],!1,null,null,null);e.default=a.exports}}]);