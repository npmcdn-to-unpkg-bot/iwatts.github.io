(function(){

    angular.module('myApp')
        .service('listService', listService);

    function listService($rootScope) {
        // do stuff here
        var self = this;
        self.currentTab = 1;
        self.currentList = [];

        self.showItems = showItems;

        self.tabs=[
            {
                'name':'Example list',
                'id': 0,
                'items':[
                    {
                        'itemName':"This is an example",
                        'itemId':'0a',
                        'itemNotes': "Blah blah blah, text goes here",
                    },
                    {
                        'itemName':"This is another example",
                        'itemId':'0b',
                        'itemNotes': "Blah blah blah, text goes here",
                    },

                ],
            },
            {
                'name':'Example 2',
                'id':1,
                'items':[
                    {
                        'itemName':"This is an example2",
                        'itemId':'1a',
                        'itemNotes': "Blah blah blah, text goes here",
                    },
                    {
                        'itemName':"This is another example2",
                        'itemId':'1b',
                        'itemNotes': "Blah blah blah, text goes here",
                    },

                ],
            },
        ];

        function showItems() {
            //check CurrentTab and show items.
            if(self.currentTab != null) {
                //display items under current tab id
                self.currentList = self.tabs[self.currentTab].items;
                $rootScope.$broadcast('listUpdated');
            }
        }

    }

}());
