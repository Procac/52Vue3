<template>
    <div>
        <p>3.请介绍一下自己</p>
        <textarea v-model="test"></textarea>
        <br/>
        <router-link to="/First"><button>上一步</button></router-link>
        <button @click="post()">提交</button>
        <button @click="Reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Three",
        data(){
            return{
                test:''
            }
        },
        methods:{
            post(){
                this.$store.commit("post",this.test);
                this.$router.push('/End');
            },
            Reset(){
                this.test='';
            }
        }
    }
</script>

<style scoped>
    button{
        margin-top: 15px;
        margin-left: 10px;

    }
</style>