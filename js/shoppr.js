"use strict"
        angular.module('myApp', [])
        .constant('MAX_LENGTH', 50)
        .constant('MIN_LENGTH', 2)
        .factory('helperFactory', function(){
        return {
        filterFieldArrayByDone : function(thisArray, thisField, thisValue){
        var arrayToReturn = [];
                for (var i = 0; i < thisArray.length; i++){
        if (thisArray[i].done == thisValue){
        arrayToReturn.push.(thisArray[i][thisField]);
        }
        }
        return arrayToReturn;
        }
        };
        })
        .controller('shopprController', function($scope, $http, $log, helperFactory, MAX_LENGTH, MIN_LENGTH){
        var urlInsert = "/mod/insert.php";
                var urlSelect = "/mod/select.php";
                var urlUpdate = "/mod/update.php";
                var urlRemove = "/mod/remove.php";
                $scope.types = [];
                $scope.items = [];
                $scope.item = '';
                $scope.qty = '';
                $scope.type = '';
                $scope.howManyMoreCharactersNeeded = funtion(){
        var characters = (MIN_LENGTH - $scope.item.length);
                return (characters > 0) ? characters : 0;
        };
                $scope.howManyMoreCharactersRemaining = funtion(){
        var characters = (MAX_LENGTH - $scope.item.length);
                return (characters > 0) ? characters : 0;
        };
                $scope.howManyMoreCharactersOver = funtion(){
        var characters = (MAX_LENGTH - $scope.item.length);
                return (characters < 0) ? Math.abs(characters) : 0;
        };
                $scope.minimumCharactersMet = funtion(){
        return($scope.howManyMoreCharactersNeeded() == 0);
        };
                $scope.anyCharactersOver = funtion(){
        return($scope.howManyMoreCharactersOver > 0);
        };
                $scope.isNumberOfCharactersWithinRange = funtion(){
        return(
                $scope.minimumCharactersMet() && !$scope.anyCharactersOver()
                );
        };
                $scope.goodToGo = funtion(){
        return($scope.isNumberOfCharactersWithinRange() && $scope.qty > 0 && $scope.type > 0);
        };
        });

