/**
 * Created by Ken on 9/12/15.
 */
angular.module('zillow-exercise').controller('IndexController', ['$scope','$http', function($scope,$http) {

    $scope.test = 'changed';
    $scope.results = null;
    $scope.error = false;
    $scope.loading = false;
    $scope.firstTime = true;
    $scope.errorMsg = "";

    $scope.address="9272 Irongate Ln";
    $scope.cityStateZip="92126";
    $scope.rentzestimate=true;

    $scope.submitClicked = function() {

        $scope.error = false;
        $scope.loading = true;
        $scope.firstTime = false;

        var getConfig = {
            params: {
                'zws-id': "X1-ZWz1dyb53fdhjf_6jziz",
                'address':$scope.address,
                'citystatezip':$scope.cityStateZip,
                'rentzestimate':$scope.rentzestimate
            }
        };

        $http.get('/queryZillow', getConfig)
            .success(function(data) {
                if(data["SearchResults:searchresults"] &&
                    data["SearchResults:searchresults"].response &&
                    data["SearchResults:searchresults"].response[0] &&
                    data["SearchResults:searchresults"].response[0].results &&
                    data["SearchResults:searchresults"].response[0].results[0] &&
                    data["SearchResults:searchresults"].response[0].results[0].result &&
                    data["SearchResults:searchresults"].response[0].results[0].result[0]) {
                    $scope.results = data["SearchResults:searchresults"].response[0].results[0].result[0];
                    $scope.loading=false;
                }
                else {
                    $scope.error=true;
                    $scope.loading = false;
                    $scope.errorMsg = "No results found";
                }
            })
            .error(function(data) {
                console.log("http error");
                console.log(data);
                $scope.error=true;
                $scope.loading = false;
                $scope.errorMsg = "HTTP error retrieving search results";
            });
    };
}]);