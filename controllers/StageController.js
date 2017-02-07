'use strict';


angular.module('portfolioapp')
.controller('StageController', StageController);

StageController.$inject = ['CozySdk'];

function StageController(CozySdk) {
      var vm = this;
      vm.stuffs = []; 
      vm.submit = submit;

     
     function submit(){
      vm.stuffs.push({title: 'Hello', content: 'world'});
      vm.stuffs.push({title: 'Coucou', content: 'la forme?'});
     }


  }


