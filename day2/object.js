let obj = {
    name:'zs',
    age:13
};

//Object.keys()
//Object.values()
//Object.entries()
//Objec.assign()


let o = Object.getOwnPropertyDescriptor(obj,'age');
console.log(o);
//属性
//数据属性
/*
configurable: true  可配置
enumerable: true  可枚举
value: 13  值
writable: true  可编写
*/
Object.defineProperty(obj,'age',{
    configurable: false,
    enumerable: false,
    value: 16,
    writable: false 
})

console.log(Object.keys(obj));


//访问器属性
//getter setter
Object.defineProperty(obj,'sex',{
    get(){  //get:function()
        return 'aaa';
    },
    set(val){
       if(val==='bbbb'){
           console.log('女')
       }else{
           console.log('男')
       }
    }
})
obj.sex = 'bbbb';



