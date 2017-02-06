'use strict';


angular.module('portfolioapp')
.controller('ProfileController', ProfileController);

ProfileController.$inject = ['CozySdk'];

function ProfileController(CozySdk) {
      var vm = this;

    function insertProfile() {

var attributes = {title:"hello", content:"world"}
CozySdk.create('Note', attributes, function(err, obj){
    console.log(obj.id)
});

    
    }

  }


