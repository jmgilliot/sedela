'use strict';

var app = angular.module('portfolioapp');

app.controller('StageController', StageController);


StageController.$inject = ['CozySdk'];

function StageController(CozySdk) {
      var vm = this;  
 	  vm.insertStage = insertStage;
      vm.updateStage=updateStage;
      vm.stage ={};
      updateStageList();

      function updateStageList() {
      	////Comment faire pour separer données tuteur entreprise eleves?
      	//Plusieurs requêtes?

         CozySdk.defineRequest('Stage', 'all', 'function(doc) {emit(doc.firstNameStudent, {firstNameStudent: doc.firstNameStudent, lastNameStudent: doc.lastNameStudent,emailStudent: doc.emailStudent,addressStudent:doc.addressStudent,formation:doc.formation,occupationStudent:doc.occupationStudent,social:doc.social,addressCompany:doc.addressCompany,activity : doc.activity,lastNameTut:doc.lastNameTut,firstNameTut:doc.firstNameTut,emailTut: doc.emailTut,phoneTut:doc.phoneTut, occupationTut:doc.occupationTut});}')
        .then(function () {
          return CozySdk.runRequest('Stage', 'all')
        })
        .then(function(res) {
          vm.stages = res;
          vm.stage = vm.stages[0];
            
             console.log('LOG Stages : ',JSON.stringify(vm.stages));
             console.log('LOG Stages : ',JSON.stringify(vm.stage));
        })
        .catch(function(error) {
            vm.error = error;
        });
      }

    function updateStage(id, stage) { 
      if (vm.stages.length==0) {
        insertStage(vm.stage.value);
      }
      else {
         var stageUpdated = angular.copy(vm.stage.value);
         CozySdk.update('Stage', id, stageUpdated)
         .then(updateStageList)
         .catch(function(error) {
             vm.error = error;
         });
      }
     }
      //   function resetForm() {
      //   var defaultForm = {};
      //   vm.profile = angular.copy(defaultForm);
      // }
   
     function insertStage(stage) {
         CozySdk.create('Stage', stage)
        //.then(resetForm)
         .then(updateStageList)
        .catch(function(error) {
          vm.error = error;
         });
    }
}


// app.directive("stageDirective", function(){
//     return {
//         restrict: 'EA',
//         replace: true,
//         transclude: true,
//         scope: {title: '=expanderTitle'},
//         template: '<div>' +
//         '<div class="title" ng-click="toggle()">{{title}}</div>' +
//         '<div class="body" ng-show="showMe" ng-transclude></div>' +
//         '</div>',
//         link: function(scope, element, attrs){
//             scope.showMe = false;
//             scope.toggle = function toggle(){
//                 scope.showMe = !scope.showMe;
//             };
//         }
//     };
// });

