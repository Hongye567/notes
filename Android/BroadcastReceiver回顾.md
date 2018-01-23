
## 静态注册  

常驻广播(一旦 app 安装到了手机，无论 app 是否运行，他都随时接收广播，并作出响应，10s )

步骤

1，编写自定义的广播接收器 继承 BroadcastReceiver
         
在 onReceive() 方法中编写广播接收具体操作
      
2, 在 Manifest.xml 中注册

```xml
<receiver android:name="com.zdsoft.MyReceiver">
    <intent-filter>
    <action android:name="aaa.bbb">
</intent-filter>
```
         
3,发送广播

```java
Intent intent = new Intent("aaa.bbb");
sendBroadcast(intent);
```

## 动态注册

步骤

1，编写自定义的广播接收器 继承 BroadcastReceiver
         
重写onReceive()方法
     
2, 在 Activity 中注册广播

在onStart()方法注册

```java
//实例化广播对象
myreceiver = new MyReceiver();
//获得IntentFilter对象
IntentFilter filter = new IntentFilter();
filter.addAction("ccc.ddd");
//注册广播接收器
registerRreceiver(myreceiver,filter);
```

3, 在 onStop()/onDestroy() 方法中注销广播

```java
unregisterRreceiver(myreceiver);
```

 4,发送广播

```java
Intent intent = new Intent("bbb.ccc");
sendBroadcast(intent);
```

## 广播的两种分类
   
### 有序广播

对于接收的广播有优先级的分别，优先级高的接收器可以改变广播的内容，也可以终止广播的传播

注册

 在 manifest.xml 中注册

```xml
<permission android:name="com.zdsoft.order"/>
<use-permission android:name="com.zdsoft.order"/>

<receiver android:name="com.zdsoft.MyReceiver"
android:permission="com.zdsoft.order">
    <intent-filter
        android:priority="1000"> // 数值越大优先级越高
        <action android:name="aaa.bbb">
    </intent-filter>
</receiver>
```

 发送广播

```java
Intent intent = newn Intent("aaa.bbb");
String permisson = "" com.zdsoft.order;
sendorderBroadcast(intent,permisson);
```

接收广播

```java
String info = intent.getStringExtra("info"); //高优先级的接收器接收消息
Bundle bundle = new Bundle() ;
bundle.putString("info",info+"dfdgfdgg"); //设置转播消息
setResultExtras(bundle); //转播消息

//低优先级广播接收器接收广播
Bundle b = getResultExtras(true); //true  如果没有数据就返回一个空的对象   false 如果没有数据就返回null
String info = b.getString("info");
```

 普通广播

普通广播对于接收的广播室完全异步的，没有时间等待


