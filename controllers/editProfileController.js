'use strict';


angular.module('portfolioapp')
.controller('EditProfileController', EditProfileController);

EditProfileController.$inject = ['CozySdk'];

function EditProfileController(CozySdk) {
      var vm = this;
      vm.insertProfile = insertProfile;
      vm.profiles = {};

      updateProfileList();


      function updateProfileList() {

        CozySdk.defineRequest('Profile', 'all', 'function(doc) {emit(doc.FirstName, {FirstName: doc.firstName, Address: doc.address,description:doc.description});}')
        .then(function () {
          return CozySdk.runRequest('Profile', 'all')
        })
        .then(function(res) {
          vm.profiles = res;
          console.log(JSON.stringify(vm.profiles));
          console.log(JSON.stringify(vm.profiles[1].value.FirstName));

         // console.log(JSON.stringify(vm.profile));
        })
        .catch(function(error) {
            vm.error = error;
        });
      }

      // function update(id, user) {
      //   var profileName = {
      //     firstName: user.firstName,
      //     lastName: user.lastName
      //   };

      //   CozySdk.update('Profile', id, profile)
      //   .then(updateProfileList)
      //   .catch(function(error) {
      //       vm.error = error;
      //   });
      // }


        function resetForm() {
        var defaultForm = {};
        vm.profile = angular.copy(defaultForm);
      }
   
    function insertProfile(profile) {
        CozySdk.create('Profile', profile)
        .then(updateProfileList)
        .catch(function(error) {
          vm.error = error;
        });
    }

  }


