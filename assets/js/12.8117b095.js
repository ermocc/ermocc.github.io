(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{570:function(e,n,t){"use strict";t.r(n);var p=t(60),s=Object(p.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("设计模式是前人总结出的一些代码设计风格，在代码开发中使用设计模式可以降低代码耦合，使代码更加灵活。")]),e._v(" "),t("p",[e._v("监听者模式主要包含三个角色：")]),e._v(" "),t("ul",[t("li",[e._v("事件对象（具体的处理信息）")]),e._v(" "),t("li",[e._v("事件监听器（一般为接口，针对事件的具体处理行为）")]),e._v(" "),t("li",[e._v("事件源（监听器的管理，比如订阅、删除、添加等）")])]),e._v(" "),t("p",[e._v("接下来简单实现一个监听者模式。")]),e._v(" "),t("p",[e._v("针对手机 App，我们有打开、关闭、切入、切出等不同操作行为，现在就拿这个例子进行编码，对不同的手机 App 行为进行监听。")]),e._v(" "),t("p",[e._v("首先是 App 事件对象。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class AppEvent extends EventObject {\n\n    public AppEvent(Object source) {\n        super(source);\n    }\n\n    public void doEvent() {\n        System.out.println("Notify event source:" + this.getSource());\n    }\n}\n')])])]),t("p",[e._v("具体的事件对象 source。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Data\npublic class AppEventMsg {\n    private String eventType;\n    private String eventName;\n    private String unionId;\n    private Date createDate;\n}\n")])])]),t("p",[e._v("事件监听器。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface AppEventListener {\n    void handleEvent(EventObject event);\n}\n")])])]),t("p",[e._v("具体的事件监听器实现，这里以打开 App 和关闭 App 举例。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class OpenAppEventListener implements AppEventListener {\n\n    @Override\n    public void handleEvent(EventObject event) {\n        System.out.println("Record open app event!");\n    }\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class CloseAppEventListener implements AppEventListener {\n\n    @Override\n    public void handleEvent(EventObject event) {\n        System.out.println("Record close app event!");\n    }\n}\n\n')])])]),t("p",[e._v("事件源，对事件监听器进行管理。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class AppEventSource {\n\n    private final ConcurrentHashMap<String, AppEventListener> listenerMap = new ConcurrentHashMap<>();\n\n    public void addListener(String eventType, AppEventListener listener) {\n        listenerMap.put(eventType, listener);\n    };\n\n    public void removeListener(String eventType) {\n        listenerMap.remove(eventType);\n    }\n\n    public void notifyListener(AppEvent eventObject) {\n        eventObject.doEvent();\n        AppEventMsg source = (AppEventMsg) eventObject.getSource();\n        AppEventListener listener = listenerMap.get(source.getEventType());\n        if (listener != null) {\n            listener.handleEvent(eventObject);\n        }\n    }\n\n}\n")])])]),t("p",[e._v("测试")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class AppEventTest {\n\n    public static void main(String[] args) {\n        AppEventSource appEventSource = new AppEventSource();\n        appEventSource.addListener("openApp", new OpenAppEventListener());\n        appEventSource.addListener("closeApp", new CloseAppEventListener());\n\n        AppEventMsg appEventMsg = new AppEventMsg();\n        appEventMsg.setEventType("openApp");\n        appEventMsg.setCreateDate(new Date());\n        appEventMsg.setEventName("openApp");\n        appEventMsg.setUnionId(UUID.randomUUID().toString().replaceAll("-", ""));\n        AppEvent eventObject = new AppEvent(appEventMsg);\n        appEventSource.notifyListener(eventObject);\n\n        AppEventMsg closeAppMsg = new AppEventMsg();\n        closeAppMsg.setEventType("closeApp");\n        closeAppMsg.setCreateDate(new Date());\n        closeAppMsg.setEventName("closeApp");\n        closeAppMsg.setUnionId(UUID.randomUUID().toString().replaceAll("-", ""));\n        AppEvent closeEventObject = new AppEvent(closeAppMsg);\n        appEventSource.notifyListener(closeEventObject);\n    }\n}\n')])])]),t("p",[e._v("监听者模式是开发过程中最常用的设计模式之一，熟悉监听者模式对开发和开源框架源码阅读都有很大的帮助。")])])}),[],!1,null,null,null);n.default=s.exports}}]);