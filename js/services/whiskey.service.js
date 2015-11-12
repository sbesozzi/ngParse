let WhiskeyService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/whiskey';

  this.getWhiskeys = function () {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  this.getWhiskey = function (whiskeyId) {
    return $http({
      method: 'GET',
      url: url + '/' + whiskeyId,
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };

  let Whiskey = function (obj) {
    this.name = obj.name;
    this.maker = obj.maker;
    this.hasTried = false;
  };

  this.addWhiskey = function (obj) {
    let w = new Whiskey(obj);
    return $http.post(url, w, PARSE.CONFIG);

  };



};

WhiskeyService.$inject = ['$http', 'PARSE'];

export default WhiskeyService;