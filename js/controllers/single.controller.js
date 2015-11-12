let SingleController = function($scope, $stateParams, WhiskeyService, $state) {
  
  WhiskeyService.getWhiskey($stateParams.whiskeyId).then( (res) => {
    $scope.singleWhiskey = res.data;
  });

  $scope.deleteMe = function (obj) {
    WhiskeyService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };

};
SingleController.$inject = ['$scope', '$stateParams', 'WhiskeyService', '$state'];
export default SingleController;