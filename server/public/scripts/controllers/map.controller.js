myApp.controller('MapController', function(MapService) {
    console.log('MapController created');
    var self = this;
    // self.userService = UserService;
    // self.homeService = HomeService;
    self.mapService = MapService;

    self.newZip = '';

    self.mapZoom = "https://maps.googleapis.com/maps/api/staticmap?center=" + self.newZip + "&zoom=15&size=800x400&scale=1&maptype=roadmap&key=AIzaSyBXCCVmaJXKRVD4t_t3cCr-pDpV1gy16Gs"
    
    self.addZip = function (zipCode) {
        console.log(zipCode);
        self.newZip = zipCode;
        console.log('newZip is', self.newZip);       
    }

  });
  

//   `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
//     &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
//     &markers=color:red%7Clabel:C%7C40.718217,-73.998284
//     &key=AIzaSyBXCCVmaJXKRVD4t_t3cCr-pDpV1gy16Gs`; self.newZip, 8513+Virginia+circle+south,55426