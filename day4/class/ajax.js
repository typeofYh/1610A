function ajax(url){
    const xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(xhr.responseText);
            }else{
                reject(new Error(xhr.statusText));
            }
        }
        xhr.open('get',url,true);
        xhr.send(null);
    })
}

ajax('/api/banner').then(data=>{
    
})  