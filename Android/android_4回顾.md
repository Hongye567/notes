
## Button   ImagButton

点击监听事件 

```java
bt.setOnClickListener(new OnClickListener（）{
    public void onClick(View v){
        //方法体
	}
})
```

## TextView

```xml
字体颜色 android:textColor = "#00ff00"
设置超链接 android:autoLink ="web|phone|email|all|none|map"
设置字体 android:textStyle="bold | italic"
设置字体大小：android:textSize="23sp"
```

## EditText

```xml
设置输入类型：android:inputType="password...."
设置框的显示长度:android:ems="10"
输入提示：android:hint="xxx"
单行输入：android:singleLine="true"
```

## Spinner

填充下拉框的几种方式：

1，使用 
```xml
Android：entities="@array/数组名"
```

2, 使用 ArrayAdapter

```java
ArrayAdapter.createFromResource(context,数组资源id,自定义布局id)
new ArarryAdapter(context,布局id,String[] strs)
```

3,获取spinner的值

```java
sp.getSelectItem().toString()
```

## radioButton radiogroup

```
android:checked="true" 默认选中
先判断选中状态 rb.isChecked() 
获取值 rb.getText()
```
   
## CheckBox

```
android:checked="true" 默认选中
先判断选中状态 rb.isChecked()
获取值 rb.getText()
```

## datepicker

初始化

```java
dp.init(context,onDateChangedListener,year,monthofyear,dayofmonth);
datepickerDialog new datepickerDialog(context,onDateSetistener,year,month,day)
dpd.show()
```
   



