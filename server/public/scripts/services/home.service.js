myApp.service('HomeService', ['$http', '$location', function($http, $location){
    console.log('HomeService Loaded');
    var self = this;

    self.siteIntro = `This site is dedicated to all things tabletop gamers. Have some opinions about a GAME, check out the forum. Just finish painting a model and want to display it, upload in the gallery. Write some fan fiction, submit it and we will post it or if you want to check out what other fans are writing, take a tour of the writers bazaar.Want to checkout the latest battle reports, we have liinks and our commentary. Looking for a podcast to suit your interests, we got that too!`;

    self.weeklyBannerHeadline = `The Tau codex drops, time for a fish fry!`
    self.weekelyBannerBody = `Click on Opinions to:
    Hear why yours truly hates the armored fishmen and why Tyler loves him some space communist.
    Submit pics of your Tau army (or your other faction slaughtering Tau) in the Gallery section.`;
}]);