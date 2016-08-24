(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('app', [
        'ui.router',
        'ngMaterial',
        'ngStorage',
        'firebase'
    ])
        .config(myAppConfig)
        .run(myAppRun);

    function myAppConfig($urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise('char-detail');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }

    function myAppRun($state) {
        $state.go('char-detail');
    }

})();
