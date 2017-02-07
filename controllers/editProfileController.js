'use strict';


angular.module('portfolioapp')
.controller('ProfileController', ProfileController);

ProfileController.$inject = ['CozySdk'];

function ProfileController(CozySdk) {
      var vm = this;
      vm.insertProfile = insertProfile;


        function resetForm() {
        var defaultForm = {};
        vm.profile = angular.copy(defaultForm);
      }
   
    function insertProfile(user) {
        CozySdk.create('Profile', user)
        .then(resetForm)
        .catch(function(error) {
          vm.error = error;
        });
    }

    

  }


