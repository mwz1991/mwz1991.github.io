
var vm = new Vue({
    el: '#app',
    data: {
        recordshow: false,
        isCur: 1,
        searchForm: {
            startDate: "",
            endDate: ""
        },
        reportLossShow:false,
        handSolutionShow:false
    },
    methods: {
        back() {
            window.history.back();
        },
        showRecord() {
            vm.recordshow = true;
        },
        hideRecord() {
            vm.recordshow = false;
        },
        todayRecord() {
            vm.isCur = 1;
        },
        histroySearch() {
            vm.isCur = 2;
        },
        search() {
            console.log(vm.searchForm);
        },
        showReportLoss() {
            vm.reportLossShow = true;
        },
        hideReportLoss() {
            vm.reportLossShow = false;
        },
        showHandSolution() {
            vm.handSolutionShow = true;
        },
        hideHandSolution() {
            vm.handSolutionShow = false;
        }
    }
})