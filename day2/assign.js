function ajax(options){
    const defaulte = {
        type:'get',
        async:true,
        data:'',
        error(){},
        success(){}
    };
    const settings = Object.assign({},defaulte,options);
    //补全后面代码
}

ajax({
    url:'/api/banner',
    success(){

    }
})



let O = function(){

}

 let obj = new O();

 Object.setPrototypeOf(obj,{});
 console.log(obj.__proto__ === O.prototype)
 console.log(O.prototype);
 console.log(obj.__proto__);


 console.log(Object.is(NaN,NaN))
