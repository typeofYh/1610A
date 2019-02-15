//async 函数  使得异步操作变得更加方便

function timer(times) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random() * 20)
        }, times)
    })
};

// timer(300).then(()=>{
//     console.log('1')
// })

// timer(200).then(()=>{
//     console.log('2')
// })

let todolist = async function () {
    //await 等待当前异步操作执行成功之后在往下执行
    //async 返回一个promise对象
    let t1 = await timer(2000);
    let t2 = await timer(200)
    return t1 + t2
}
// todolist().then(n=>{
//     console.log(n);
// })


const {
    readFile,
    writeFile
} = require('fs');

function readys(filepath) {
    return new Promise((resolve, reject) => {
        readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        })
    })
}

async function concat() {
    let f1 = await readys('./css/common1.css');
    let f2 = await readys('./css/style.css');
    return f1 + f2;
}

concat().then(text => {
    writeFile('./css/concat.css', text, err => {
        if (err) {
            return;
        }
        // console.log('success');
    })
}, (mes) => {
    console.log(mes);
})


function* aaa() {
    let f2 = yield readys('./css/common.css');
    console.log(f2);
    let f3 = yield readys('./css/style.css');
    console.log(f3);
}
let o = aaa();
o.next().value.then((res) => {
    o.next(res).value.then((text)=>{
        o.next(text);
    })
})