'use strict';


angular.module('portfolioapp')
.controller('EditProfileController', EditProfileController);

EditProfileController.$inject = ['CozySdk'];

function EditProfileController(CozySdk) {
      var vm = this;
      vm.insertProfile = insertProfile;
      vm.updateProfile=updateProfile;
      vm.profile ={};
      updateProfileList();

      function updateProfileList() {

        CozySdk.defineRequest('Profile', 'all', 'function(doc) {emit(doc.firstName, {firstName: doc.firstName, lastName: doc.lastName,dateOfBirth: doc.dateOfBirth,email:doc.email,phone:doc.phone,hobbies:doc.hobbies,keywords:doc.keywords,diploma:doc.diploma,occupation:doc.occupation,skills:doc.skills,address: doc.address,description:doc.description});}')
        .then(function () {
          return CozySdk.runRequest('Profile', 'all')
        })
        .then(function(res) {
          vm.profiles = res;
          vm.profile = vm.profiles[0];
         // console.log('LOG PROFILES : ',JSON.stringify(vm.profiles));
         //console.log(JSON.stringify(vm.profiles.length));  
        })
        .catch(function(error) {
            vm.error = error;
        });
      }

    function updateProfile(id, profile) { 
      if (vm.profiles.length==0) {
        insertProfile(vm.profile.value)
      }
      else {
         var profileUpdated = angular.copy(vm.profile.value);
         //console.log('////////////////',JSON.stringify(profileUpdated));  
         CozySdk.update('Profile', id, profileUpdated)
         .then(updateProfileList)
         .then(window.location.href = '#/profile')
         .catch(function(error) {
             vm.error = error;
         });
      }
      }
      //   function resetForm() {
      //   var defaultForm = {};
      //   vm.profile = angular.copy(defaultForm);
      // }
   
     function insertProfile(profile) {
         CozySdk.create('Profile', profile)
        //.then(resetForm)
         .then(updateProfileList)
        .catch(function(error) {
          vm.error = error;
         });
    }

  }


