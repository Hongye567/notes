
## Activity

7 个生命周期方法
```
onCreate() //控件的初始化，相应监听器的绑定，Adapter数据绑定
onStart()
onResume() //交互
onRestart()
onPause()  //进行数据保存
onStop()
onDestroy()
```

## Intent

### Activity 的两种跳转方式

无返回值的跳转

```java
Intent intent = new Intent(Context c , xx.class);
intent.putExtra("xxx",Object o);//设置intent携带的信息
startActivity(intent);
```

有返回值
        
1，在发送方

```java
Intent intent = new Intent(Context c , xx.class); //创建intent对象
intent.putExtra("xxx",Object o); //设置intent携带的信息
startActivityForResult(intent,1); //启动第二个Activity
```

2,在接收方

```java
Intent intent = getIntent();   //SencondActivity.this.getIntent() 获得intent对象
String str = intent.getExtras().getString("xxx"); //获得intent携带的数据
intent.putExtra("yyyy","xxx"); //设置intent回传的信息
setReSult(1,intent); //设置结果
finish(); //摧毁当前Activity
```

3,在发送方接收数据

```java
 // 重写
 onActivityResult(int requestCode,int resultCode , Intent data) {
    if(requestCode==1 && resultCode == 1) {  //判断请求码与结果码
        String str = data.getExtras().getString("yyy"); //处理返回结果
    }
}
```
          
### Intent的两种调用方式

显式调用 

```java
Intent intent = new Intent(Context c, xx.class);
startActivity(intent);
```

隐式调用

1，在 manafist.xml 里注册 Activity

为这个 Activity 添加

```xml
<intent-filter>
    <action name="com.zhidi.test"/>
    <category name="android.intent.Category.Default"/> 
</intent-filter>
```
                
2,在构建 inten t对象的时候传入 action 的 name

```java
Intent intent = new Intent("com.zhidi.test");
startActivity(intent);
```
               
启动系统提供的 Activity (如发送短息)

```java
Uri uri = Uri.parse("smsto:10086");
Intent intent = new Intent(Intent.ACTION_SENDTO,uri);
startActivity(intent);
```
              
Activity的栈式管理

压栈(相当于放饼干)，弹栈(吃饼干)
    
