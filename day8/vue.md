Vue是一个渐进式开发的javascript的框架
MVVM的框架
Model-View-ViewModel

data 声明数据
methods 定义方法 

> vue的基础指令

v-show
控制当前元素的display:block属性，控制元素的显示隐藏

v-on:eventname.修饰符
@eventname
注册事件
事件修饰符:
    .prevent 阻止事件默认行为
    .stop 阻止事件冒泡
    .capture 捕获阶段执行
    .self 只触发的自己的事件
    .once 只绑定一次
    .keyCode  键码
    .keyalias  别名
$event 找事件对象

v-bind:属性
:
    动态属性


v-for 循环

v-for="(item,index) in array"
v-for="(value,key) in object"



v-model 数据视图双向绑定