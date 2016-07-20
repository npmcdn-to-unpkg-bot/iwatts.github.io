(function(){

    angular.module('listModule', [])
        .component('myList', { // the tag for using this is <my-example>
            templateUrl: "../angular/templates/list-template.html",
            controller: listController
        });

    function listController(listService, $scope) {
        var self = this;

        // get object from service, create and store items in object.
        self.tabs = listService.tabs;
        self.currentTab = listService.currentTab;
        self.currentList = listService.currentList;

        console.log(self.currentList);
        
        $scope.$on('listUpdated', function () {
            self.currentList = listService.currentList;
        });

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
