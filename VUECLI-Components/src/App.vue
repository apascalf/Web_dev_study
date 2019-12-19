<template>
  <div>
      <h1>Heading from first component</h1>
   <students :students="students" :msg="msg"></students>
      <heading></heading>

  </div>
</template>

<script>
import heading from "@/components/heading";
import students from "@/components/students";

export default {
  name: 'app',
    data(){
      return{
          msg:'This is a message and data inserted as prop',
          students:[
              {name:'Jim', experience:'2'},
              {name:'Rob', experience:'8'},
              {name:'Tom', experience:'9'},
              {name:'Sam', experience:'12'},
          ]
      }
    },
  components: {
      'heading':heading,
      'students':students,
  }
}
</script>

<style>
#app {

}
h1{
    color: green;
}
</style>
