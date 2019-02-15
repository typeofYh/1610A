let fun = function(){
    console.log(arguments);
};


fun();


let fun1 = (s,n)=>({
        text:s,
        n
    })

// console.log(fun1('str',3));


let sum = (...n)=> n.reduce((p,n)=>p+n);

console.log(sum(10,20,30,40));



//1.不支持arguments 可以使用rest操作符获取所有形参


let Person = function(){
    this.name = 'zs'
}

// console.log(new Person().name);

// let Table = ()=>{

// }
// new Table();

//2.箭头函数不能当作构造函数来使用

var name = 'window';
let showName = ()=>{
    console.log(this.name);
}
let obj = {
    name:'zs',
    sayname1:()=>{
        console.log(this.name)
    },
    sayname(){
        let aa = ()=>{
            console.log(this.name);
        }
        aa();
    }
};

obj.sayname1();
obj.sayname();

//3.箭头函数不能修改this指向


//4.箭头函数的this指向指向外层对象