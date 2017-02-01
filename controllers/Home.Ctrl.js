angular.module('browserapp',['ui-bootstrap']).controller('HomeAngCtrl', HomeAngCtrl);

function HomeAngCtrl(CozySdk) {
    var vm = this;

    vm.hello = "world";

}
