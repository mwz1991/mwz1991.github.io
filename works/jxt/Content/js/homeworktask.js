
var vm = new Vue({
    el: '#app',
    data: {
        popupVisible: false,
        selectShow: false,
        detailshow: false,
        flag_bgshow: true,
    },
    mounted: function () {
        this.$nextTick(function () {
            if (this.$refs.homeworklist.getElementsByClassName('list-item').length > 0) {
                this.flag_bgshow=!this.flag_bgshow;
            } else {
                
                this.flag_bgshow= this.flag_bgshow;
            }
        })
    },
    methods: {
        back() {
            window.history.back();
        },
        toggle() {
            vm.selectShow = !vm.selectShow;
        },
        showDetail() {
            vm.detailshow = true;
        },
        hideDetail() {
            vm.detailshow = false;
        }
    }
})