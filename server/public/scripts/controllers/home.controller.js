myApp.controller('HomeController', ['UserService', 'HomeService', function(UserService, HomeService) {
  console.log('HomeController created');
  var self = this;
  self.userService = UserService;
  self.homeService = HomeService;

  self.siteIntro = HomeService.siteIntro;
  self.weeklyBannerHeadline = HomeService.weeklyBannerHeadline;
  self.weekelyBannerBody = HomeService.weekelyBannerBody;

}]);
