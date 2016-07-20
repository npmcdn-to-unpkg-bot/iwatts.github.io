(function(){

    angular.module('listServiceModule')
        .service('listService', listService);

    function listService() {
        // do stuff here
        var self = this;
        self.currentTab = null;
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
                        'itemName':"This is an example",
                        'itemId':'1a',
                        'itemNotes': "Blah blah blah, text goes here",
                    },
                    {
                        'itemName':"This is another example",
                        'itemId':'1b',
                        'itemNotes': "Blah blah blah, text goes here",
                    },

                ],
            },
        ];
    }

}());
