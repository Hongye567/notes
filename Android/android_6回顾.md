
## ListView 

```java
SimpliAdapter new SimpleAddapter(Context context, ArrayList<Map<String,Object>>  data_list , int R.layout.xxx , String[] from ,int[] to)
```

Context context //运行环境上下文     MainActivity.this

ArrayList<Map<String,Object>> data_list   //数据源

R.layout.xxx  //自定义的布局文件

from   // 数据源中map集合的键所组成的数组

to    // 数据源中数据展示所需要的控件的ID id存在于R.layout.xxx这个布局文件中

## 自定义的 Adapter

1，需要两个布局文件，一个是有 ListView 控件的 layout 文件，第二个是自定义的布局文件（用来展示数据，相当于 listView 的一行）

2，在 Activity 里初始化 ListView 控件

3,自定义适配器 MyAdapter 继承 BaseAdapter

全局变量：

LayoutInflater ml //用来加载布局文件，将布局文件转换成View对象，

 ArrayList\<Map\<String,Object\>\> 数据源

参数：

Context context, ArrayList\<Map\<String,Object\>\> 数据源

ml = LayoutInflater.from(Context ,context)

this.data_list = data_list 
      
4,重写getView方法
          
获得布局文件，并将其转换成View对象

```java         
View v ;
if(convertView == null) {
    v = ml.inlfater(R.layout.xxx,null);
} else {
    v = convertView ;
}
Map<String , Object> map = data_list.get(position);//数据
ImgView img = (ImgView)v.findViewById(R.id.img);
img.setImgResource((Integer)map.get("img"));
img.setOnclickListener(new OnclickListener(){
    
}) ;
return v ;
```

5,创建自定义适配器对象

```java
MyAdapter mya = new MyAdapter(MainActivity.this,data_list);
```
6,为ListView设置适配器

```java
lv.setAdapter(mya);
```

## GridView

```xml
android:numColunms="列的数量"
android:stretchmod="colunmWidth" //缩放模式
```
     
1,实例化GridView
     
2,创建适配器
     
3,设置适配器

## AlertDialog

```java
new AlertDialog.Builder(Context context).setTitle().setxx().create().show();

AlertDialog.Builder builder = new Builder(MainActivity.this);//创建AlertDialog.Builder对象
builder = builder.setxxx();//配置AlertDialog的显示内容等
AlertDialog dialog = builder.create() //得到dialog对象
dialog.show();//展示弹出框
```
    
     