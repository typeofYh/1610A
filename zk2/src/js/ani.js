export default class {
    constructor(data){
        this.data = data;
        this.parent = document.querySelector('#app');
        this.render();
        this.transiton();
    }
    render(){
        this.parent.innerHTML = this.data.map(item=>{
            return `<p>${item}</p>`
        }).join('')
    } 
    transiton(){
        this.p = [...this.parent.children];
        this.arr = this.p.map(item=>{
            return {
                el:item,
                promise:new Promise(resolve=>{
                    item.addEventListener('webkitAnimationEnd',()=>{
                        resolve();
                    })
                })
            }
        })
        this.startAnimation();
    }  
    async startAnimation(){
        for(let val of this.arr){
            val.el.classList.add('active');
            await val.promise
        }
    }
}