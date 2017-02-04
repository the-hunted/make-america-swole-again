app.controller('HistCtrl', function ($scope, WorkoutsFac, StorageFac, LokiFac) {
  $scope.history;
  $scope.$watch('$viewContentLoaded', function(){
    LokiFac.initDB();
    LokiFac.getAll()
      .then(function(wods){
        $scope.history = WorkoutsFac.getWorkoutHistory();
        console.log('scope history', $scope.history);
      });
  });
});