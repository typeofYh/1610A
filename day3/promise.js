//解决回调函数套回调函数的问题，是一种更合理的解决异步操作的方案


// let fs = require('fs');
// const path = require('path');
// fs.readFile(path.join(__dirname,'promise.js'),'utf8',(err,data)=>{
//     if(err){
//         return;
//     }
//     fs.writeFile(path.join(__dirname,'fs.js'),data,(err)=>{
//         if(err){
//             return;
//         }
//         succcess(function(){

//         });
//     })
// })

// function succcess(ck){
//     setTimeout(ck,3000)
// }
function getimg(url){
    return new Promise((resolve,reject)=>{
        //resolve 成功执行的操作
        //reject 失败执行的操作
        const img = new Image();
        img.onload = ()=>{
            resolve(img);
        }
        img.onerror = ()=>{
            reject(`找不到图片`);
        }
        img.src = url
    });
}   
 

//catch


function get(url,async=true,data=''){
    const xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        xhr.onload = ()=>{
            if(xhr.status>=200 && xhr.status<=300 || xhr.status===304){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(new Error(`找不到请求地址：${url}`))
            }
        }
        xhr.open('get',url,async);
        // xhr.setRequestHeader('content-type','json');
        xhr.send(data);
    })
}

get('./data1.json').then((data)=>{
    new Banner(data);
}).catch((mes)=>{
    console.log(mes);
})

function Banner(data){
    this.data = data;
    this.init();
}
Banner.prototype = {
    constructor:Banner,
    init(){
        this.data.forEach(item => {
            getimg(item.img).then((img)=>{
                // document.body
            })
        });
    }
}