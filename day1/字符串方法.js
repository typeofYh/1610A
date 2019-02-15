let str = '※';

function repeat(str,min,max){
    let cont = Math.floor(Math.random()*(max-min+1)+min);
    return str.repeat(cont);
}

console.log(repeat(str,10,20));


let str1 = '112aba1a';
console.log(str1.endsWith('a'));

//startsWith(字符内容,index)
//查找开始字符
//endsWith(字符内容,index)
//查找结束字符


let str2 = '下雪啦';

console.log(str2.padStart(1,'*'));

console.log(str2.padEnd(20,'*'));



Mock.mock({
    'a|10':1
})
