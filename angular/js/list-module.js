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
        self.editState = false;

        self.addItem = addItem;
		self.removeItem = removeItem;
		self.editItem = editItem;
		self.updateItem = updateItem;

        $scope.$on('listUpdated', function () {
            self.currentList = listService.currentList;
            self.currentTab = listService.currentTab;
        });

        function addItem() {
            //generate item id
            var itemsLength = self.currentList.length;
            var chr = String.fromCharCode(97 + itemsLength);

            var itemID = self.currentTab + chr;


            //push to items
            var newItem = {
                'itemName':"New name",
                'itemId': itemID,
                'itemNotes': 'Add notes',
                'itemProgress':'0',
            };
            self.currentList.push(newItem);

        }
        function removeItem(iid) {
			self.currentList.splice(iid, 1);
        }
        function editItem(list) {
            list.editState = !list.editState;
        }
        function updateItem($event, item) {
            var newContent = $event.target.value;

            console.log(newContent);
        }

    }

}());
