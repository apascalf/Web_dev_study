var app = new Vue({
    el:'#app',
    data:{
        message: 'Hello World',
        name: 'ABC',
        price: '1000',
        imgpath: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        link:'http://www.google.com',
    },
    methods:{
        discount:function (x) {
            cost =this.price - x;
            return cost;
        }
    }


});