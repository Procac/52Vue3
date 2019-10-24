<template>
    <div class="Fist">
        <p>2.请选择你的爱好：</p>
        <input v-model="fist"  value="看书"  type="checkbox">看书
        <input v-model="fist"  value="游泳"   type="checkbox">游泳
        <input v-model="fist" value="跑步"   type="checkbox" >跑步
        <input v-model="fist" value="看电影"  type="checkbox" >看电影
        <input v-model="fist" value="听音乐"   type="checkbox" >听音乐
        <input v-model="fist" value="动漫"  type="checkbox" >动漫
        <br>
        <router-link to="/"><button>上一步</button></router-link>
        <button @click="Three">下一步</button>
        <button  @click="reset">重置</button>
    </div>
</template>

<script>
    export default {
        name: "First",
        data() {
            return {
                fist: []
            }
        },
        methods: {
            Three() {
                this.$store.commit("Three", this.fist);
                this.$router.push("/Three");
            },
            reset() {
                this.fist = [];
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