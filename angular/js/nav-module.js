(function(){

    angular.module('navModule', [])
        .component('myNav', { // the tag for using this is <my-nav>
            templateUrl: "../angular/templates/nav-template.html",
            controller: navController
        });

    function navController() {
        // do stuff here
        var self = this;
        //console.log('test Nav');
    }

}());
