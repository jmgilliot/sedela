angular.module('portfolioapp').controller('ProfileController', ProfileController);

ProfileController.$inject = ['CozySdk'];

function ProfileController(CozySdk) {

	var vm = this;
    vm.send = send;
    vm.update = update;


function send(user) {
        CozySdk.create('Profile', user)
        .then(resetForm)
        .then(updateContactList)
        .catch(function(error) {
          vm.error = error;
        });
    }

 function updateProfile()) {
        CozySdk.defineRequest('Profile', 'all', 'function(doc) { emit(doc.n); }')
        .then(function () {
          return CozySdk.runRequest('Profile', 'all')
        })
        .then(function(res) {
          vm.profile = res;
        })
        .catch(function(error) {
            vm.error = error;
        });
      }


}
