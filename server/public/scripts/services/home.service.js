myApp.service('HomeService', ['$http', '$location', function($http, $location){
    console.log('HomeService Loaded');
    var self = this;

    self.siteIntro = `This site is dedicated to matching gamers with other gamers in their area looking for a battle or quest or just a stroll through a dungeon. 
    We use maps, we use emails, but the best tool for finding a game is joining or creating a local gamer Fellowship. 
    Fellowships are local groups of gamers you can connect with through this site and organize customized games and times.
    `;

    self.weeklyBannerHeadline = `The Tau codex drops, time for a fish fry!`
    self.weekelyBannerBody = `Click on Opinions to:
    Hear why yours truly hates the armored fishmen and why Tyler loves him some space communist.
    Submit pics of your Tau army (or your other faction slaughtering Tau) in the Gallery section.`;
}]);