/*Vue.component('mycomponent',
{
    template:'<p>This is my component --> name: {{name}} - temperature: {{temp}} <button v-on:click="changeTemp()">Increase temperature</button> </p> ',
        data: function () {
        return{
        name: 'John',
        temp: 100,

        }
        },
    methods:{
        changeTemp: function () {
        this.temp= this.temp+10;
        }
    }

});

*/


var app= new Vue({
    el: '#app',
    data:{
         years: 2,
         rate: 12,
        intr: '',

    },
    methods: {
    interest:function () {
    this.intr= this.$refs.principal.value * this.years * this.rate;
    }
    }

});

