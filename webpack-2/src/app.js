import {array} from "./js/array";
console.log(array(['hello',1,2,3,5,3,'hello']))

import "./css/style.css";

setTimeout(function(){
   console.log(111);
},100);


const xhr = new XMLHttpRequest();
xhr.open('post','/api/list',false);
xhr.setRequestHeader('content-type','application/json');
xhr.send(JSON.stringify({
    name:'zs',
    pwd:'1234'
}));
console.log(xhr.responseText);