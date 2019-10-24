<template>
    <div>
        <p>您的性别是：{{this.$store.state.one}}</p>
        <p>您的爱好是：{{this.$store.state.fist.join(",")}}</p>
        <p>个人简介：{{this.$store.state.test}}</p>
    </div>
</template>

<script>
    export default {
        name: "End"
    }
</script>

<style scoped>

</style>