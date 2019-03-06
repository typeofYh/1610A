<template>
    <div>
        <form>
            <input type="text" placeholder="请输入用户名" v-model="user">
            <input type="password" placeholder="请输入密码" v-model="pwd">
            <button type="button" @click="login">登陆</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:'',
            pwd:''
        }
    },
    methods:{
        login(){
            if(this.user!='' && this.pwd!=''){
                this.$ajax.post('/api/login',{
                    user:this.user,
                    pwd:this.pwd
                }).then(res=>{
                    let {code,mes,user} = res.data;
                    if(code){
                        localStorage.setItem('user',user);
                        this.$router.go(-1);
                    }else{
                        alert(mes);
                    }
                })
            }
        }
    }
}
</script>

