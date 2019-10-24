<template>
    <div >
        <p>1.请问你的性别是：</p>
        <input v-model="one"  value="男" id="boy" type="radio" ><label for="boy">男</label>
        <input v-model="one"  value="女" id="girl" type="radio" ><label for="girl">女</label>
        <input v-model="one" value="保密" id="none" type="radio" ><label for="none">保密</label>
        <br>
        <button @click="First()">下一页</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script >
    export default {
        name: "Index",
        data() {
            return {
                one: "男"
            }
        },
        methods: {
            First() {
                this.$store.commit("First", this.one);
                this.$router.push("/First");
            },
            reset() {
                this.one = 'none';
            }
        }
    }
</script>

<style scoped>
    input{
        margin-left: 10px;
    }
button{
    margin-top: 15px;
    margin-left: 10px;

}

</style>