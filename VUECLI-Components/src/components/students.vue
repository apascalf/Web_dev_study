<template>
    <div>
    <p v-for="student in students" v-bind:key="student.name">{{student.name}} ---> {{student.experience}}</p>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        props:['students','msg'],
        data(){
            return{
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    h1{

    }
</style>