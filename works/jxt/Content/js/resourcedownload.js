
var vm = new Vue({
    el: '#app',
    data: {
        tableData: []
    },
    methods: {
        back() {
            window.history.back();
        },
        download(index) {
            console.log('download');
            console.log(JSON.stringify(index));
            var el = event.target;
            el.innerHTML = "&#xe9bc;";
            el.classList.add("active");
        }
    },
     filters: {
        timeformat: function (val) {
            val = val.slice(0, 10)
            return val;
        }
    }
})