let SingleController = function($scope, $stateParams, WhiskeyService) {

  // Moved PARSE to whiskey.service.js
  
  WhiskeyService.getWhiskey($stateParams.whiskeyId).then( (res) => {
    $scope.singleWhiskey = res.data;
  });

};

SingleController.$inject = ['$scope', '$stateParams', 'WhiskeyService'];

export default SingleController;