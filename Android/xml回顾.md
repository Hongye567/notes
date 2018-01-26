
## xml 语法格式：

文档申明：`<? xml version="1.0" encoding="utf-8" ?>`

标签：成对出现 <students></students> 大小写敏感

根标签：有且仅有一个

注释：<!-- --> 注释不能嵌套，不能写在标签里面

属性：<student stuid="1001"></student>  属性与属性之间用空格隔开，属性值用引号分隔，一般情况下使用双引号

标签名不能以数字，_开头，不能含有: , 不能有空

## xml 解析步骤：

1，获得解析工厂 

```java
XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
```

2，获得解析器

```java
XmlPullParser parser = factory.newPullParser();
```

3，设置输入流

```java
parser.setInput(new StringReader(xml字符串));
Parser.setInput(new FileReader(文件路径));
```

4,获得事件类型

```java
int eventType = parser.getEventType() ;
```

5,根据不同的事件进行相应的操作

```java
while(eventType != XmlPullParser.END_DOCUMENT) {
   if(eventType == XmlPullParser.START_DOCUMENT) {  //开始解析文档
   
   }else if(eventType == XmlPullParser.START_TAG) {  //开始解析标签
       String tagName = parser.getName();//获得标签名字
       int count = parser.getAttributeCount();//获得属性总个数
       for(int i=0 ; i < count ;i++) {  //遍历属性
           String attrName = parser.getAttributeName(i);//获得属性名
           String attrValue = parser.getAttributeValue(i)；//获得属性值
       }
       String text = parser.nextText();//获得下一个标签的文本内容
   }else if(eventType == XmlPullParser.TEXT) {  //开始解析文本
   
   }else if(eventType == XmlPullParser.END_TAG) {  //结束解析标签
   
   }
   eventType = parser.next();//刷新，进入下一步
}
```

## xml 生成：

### 1，获得解析工厂

```java
XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
```

### 2，获得生成器

```java
XmlSerializer xs = factory.newSerialier();
```

### 3,设置输出流

1) xs.setOutput(new FileWriter(文件路径));

2) StringWriter sw = new StringWriter() ;
      xs.setOutput(sw)

### 4,开始生成xml数据
```java
 xs.startDocument("",boolean);
 xs.startDocument("utf-8",null); //第一个参数是字符编码，第二个参数表示文档定义是否在同一个文件
 xs.startTag("","");
 xs.startTag(null,"students");//第一个参数是命名空间，第二参数是标签名
 xs.attribute("","","");
 xs.attribute(null,"stuid","1001");//第一个参数是命名空间，第二个参数是属性名，第三个参数是属性值

xs.text(""); //设置标签的文本内容
xs.endTag("","");
xs.endDocument();
xs.flush();
```

