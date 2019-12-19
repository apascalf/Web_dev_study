<template>
    <div>
        <h1>Heading from second component</h1>
        <p v-for="student in students" v-bind:key="student.id">{{student}}</p>
    </div>
</template>

<script>
    export default {
        data(){

return{
        students:['Tom','John','Rob'],
    }}
    }


</script>

<style scoped>
    #app {

    }
    h1{
        color:red;
    }
</style>
