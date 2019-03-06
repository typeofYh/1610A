<template>
    <div>
        <my-header>
            <span>个人中心</span>
        </my-header>
        <main>
            <div v-if="useropen">欢迎<b>{{useropen}}</b></div>
            <div v-else>请<router-link to="/login">登陆</router-link></div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return{
            useropen:false
        }
    },
    created(){
        let user = localStorage.getItem('user');
        if(user){
            this.useropen = user;
        }else{
            this.useropen = false
        }
    }
}
</script>

