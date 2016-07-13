(function(){

    angular.module('mainAppModule', [])
        .component('myExample', { // the tag for using this is <my-example>
            templateUrl: "../angular/templates/main-template.html",
            controller: exampleController
        });

    function exampleController() {
        // do stuff here
        var self = this;
        //console.log('test');

    }

}());
