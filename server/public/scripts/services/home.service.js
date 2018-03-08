myApp.service('HomeService', ['$http', '$location', function($http, $location){
    console.log('HomeService Loaded');
    var self = this;

    self.siteIntro = `This is how the site works, words........ more words.......`;
}]);