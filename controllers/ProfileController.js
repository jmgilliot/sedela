'use strict';


angular.module('portfolioapp')
.controller('ProfileController', ProfileController);

ProfileController.$inject = ['CozySdk'];

function ProfileController(CozySdk) {
      var vm = this;

      insertProfile();


    function insertProfile() {
CozySdk.create('Note', {title:"hello123", content:"world"}, function(err, obj){
    console.log(err)
    alert('Cozy cest de la merde');
});

    
    }

  }


