let ListController = function($scope, WhiskeyService) {

  WhiskeyService.getWhiskeys().then ( (res) => {
    $scope.whiskeys = res.data.results;
  });

};
ListController.$inject = ['$scope', 'WhiskeyService'];
export default ListController;