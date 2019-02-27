props:{
    属性名:Number|String|Object|Array|Boolean|Function,
    属性名:{
        type:类型,
        required:必填项默认为false
        default:默认值 简单值 或者是 函数默认值为对象的时候使用函数, 
        validator:自定义格式验证 函数 return成立
    }
}
props:[属性名,属性名]
验证属性

子组件向父组件通信可以通过
$emit(事件名称,实参1,实参2...) 触发 
@事件名称="事件处理程序"
