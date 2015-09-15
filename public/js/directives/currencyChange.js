/**
 * Created by Ken on 9/14/15.
 */
angular.module('zillow-exercise').directive('currencyChange', function() {
    return {
        restrict: 'E',
        scope: {
            deltaStr: '=delta',
            duration: '=duration'
        },
        templateUrl: 'currencyChange.html',
        link: function (scope) {
            scope.delta = parseInt(scope.deltaStr);
        }
    };
});