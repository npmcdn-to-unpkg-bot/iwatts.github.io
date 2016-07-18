(function(){

    angular.module('listModule', [])
        .component('myList', { // the tag for using this is <my-example>
            templateUrl: "../angular/templates/list-template.html",
            controller: listController
        });

    function listController() {
        // do stuff here
        var self = this;
        // get object from nav, create and store items in object.
        function addItem() {
            
        }
        function removeItem() {
            
        }
        function updateItem() {

        }
        function expandItem() {

        }

    }

}());
