<template>
    <h1>{{hdr}}</h1>
</template>

<script>
    export default {
    data(){
        return{
            hdr: 'This is the header from the third local component'
        }

    },
        methods:{

        }
    }
</script>

<style scoped>
h1{
    color: gray;
}
</style>