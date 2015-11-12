let AddController = function($scope, $http, PARSE) {
  
  $scope.addWhiskey = (obj) => {
    WhiskeyService.addWhiskey(obj).then( (res) => {
      $scope.whiskey = {};
    });
  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;