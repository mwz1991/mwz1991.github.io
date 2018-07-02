
var vm = new Vue({
    el: '#app',
    data: {
        searchForm: {
            startDate: "",
            endDate: ""
        },
    },
    methods: {
        back() {
            window.history.back();
        },
        search(){

        }
    }
})