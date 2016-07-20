(function(){

    angular.module('navModule', [])
        .component('myNav', { // the tag for using this is <my-nav>
            templateUrl: "../angular/templates/nav-template.html",
            controller: navController
        });

    function navController(listService) {
        // do stuff here
        var self = this;
        var tabID = 2;
        self.addingTab = false;
        self.text = "Example list";
        self.message = "";
        self.currentTab = null;

        self.addTab = addTab;
        self.removeTab = removeTab;
		self.viewTab = viewTab;
        self.toggle = toggle;


        self.tabs = listService.tabs;
        self.currentTab = listService.currentTab;

        var currentTab;
        //console.log('test Nav');
        function toggle() {
            self.addingTab = !self.addingTab;
        }
        function addTab() {
            //Check if tab title exists
            if(self.tabs.indexOf(name) !== -1) {
                self.message = 'list name already exists!';
                console.log(self.message);
            }
            //push to tabs
            var newTab = {
                'name':self.text,
                'id': tabID
            };
            self.tabs.push(newTab);

            /*add new tab id*/
            tabID++;

        }
        function removeTab(id) {
            //break from tabs
            /*Get tab id and remove from array*/
            self.tabs = $.grep(self.tabs, function(e){
                return e.id != id;
            });
            console.log("remove " + id);
        }

        function viewTab(tabSelection) {
            self.currentTab = listService.currentTab = tabSelection;
            listService.showItems();
        }
    }

}());
