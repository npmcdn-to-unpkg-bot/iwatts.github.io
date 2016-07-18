(function(){

    angular.module('navModule', [])
        .component('myNav', { // the tag for using this is <my-nav>
            templateUrl: "../angular/templates/nav-template.html",
            controller: navController
        });

    function navController() {
        // do stuff here
        var self = this;
        var tabID = 2;
        self.addTab = addTab;
        self.removeTab = removeTab;
		self.viewTab = viewTab;
        self.tabs=[
            {
                'name':'Example list',
                'id': 0
            },
            {
                'name':'Example 2',
                'id':1
            }
        ];
        var currentTab;
        //console.log('test Nav');
        function addTab() {
            //push to tabs
            /*add new tab id*/
            console.log("tab added");
        }
        function removeTab(id) {
            //break from tabs
            /*Get tab id and remove from array*/
            console.log("remove " + id);
        }
        function viewTab(tabSelection) {
            currentTab = tabSelection;
			console.log(currentTab);
        }
    }

}());
