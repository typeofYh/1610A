const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock{ // 静态数柱的类
    constructor({
        color="red",
        text=1,
        height=30,
        width=30,
        margin = 10,
        min=1,
        max=9
    }){
        if(text >=min && text<=max){
            this.render(color,text*1,height,width,margin);
        }else{
            alert(`请输入${min}到${max}之间的数字`);
        }
    }
    render(color,text,height,width,margin){
        this.box = document.createElement('div');
        this.box.style.cssText = `background:${color};height:${height}px;width:${width}px;padding-top:${(text-1)*margin}px;line-height:${height}px`;
        this.box.innerHTML = text;
        oBox.appendChild(this.box);
    }
}

class MoveNumBlock extends StaticNumBlock{// 动态数柱的类
    constructor(obj){
        super(obj);
        this.box.classList.add('ani');
        this.addEvent();
    }
    addEvent(){
        const eventName = 'webkitAnimationEnd' || 'animationEnd';
        this.box.onclick = () =>{
            this.box.classList.add('jump');
        }   
        this.box.addEventListener(eventName,()=>{
            this.box.classList.remove('jump');
        })
    }
}

// 分别给按钮添加点击事件，实现所要求的的效果
staticBtn.onclick = () => {
    new StaticNumBlock({
        color:"red",
        text:numInput.value
    })
}

moveBtn.onclick = () => {
    new MoveNumBlock({
        color:"pink",
        text:numInput.value
    })
}
function showTimer(time,el){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            el.classList.add('jump');
            resolve(time)
        },time)
    })
}


allBtn.onclick = () =>{
    const anis = [...oBox.querySelectorAll('.ani')];
    // anis.forEach((item,i)=>{
    //     setTimeout(()=>{
    //         item.classList.add('jump');
    //     },i*180)
    // })
    async function Timer(){
        for(let i=0;i<anis.length;i++){
            await showTimer(180,anis[i]);//1 2
        }
    }
    Timer();
}
