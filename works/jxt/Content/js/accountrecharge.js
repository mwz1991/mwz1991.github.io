
var vm = new Vue({
    el: '#app',
    data: {
        yzmShow: true,
        count: '',
        timer: null,
        rechargeResultShow:false
    },
    methods: {
        back() {
            window.history.back();
        },
        getCode() {
            const TIME_COUNT = 60;
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.yzmShow = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.yzmShow = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        },
        pay() {
            vm.rechargeResultShow = true;
        },
        hideRechargeResult() {
            vm.rechargeResultShow = false;
        }
    }
})