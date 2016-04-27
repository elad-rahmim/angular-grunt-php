'use strict';

/**
 * @ngdoc function
 * @name youtubeApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the youtubeApp
 */
angular.module('youtubeApp')
        .controller('BlogCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

            $scope.frmToggle = function() {
                $('#blogForm').slideToggle();
            };

            $http.get('http://www.ngphp.com/api/popData.php')

                .success(function(data) {
                    $scope.blogs = data;
                })
                .error(function(err) {
                    $log.error(err);
                });

            $scope.pushData = function($params) {
                $http.post('http://www.ngphp.com/api/pushData.php',{'title':$params.title, 'description':$params.description, 'count':$params.count })
                    .success(function(data) {
                        $scope.blogs = data;
                    })
                    .error(function(err) {
                        $log.error(err);
                    });
            };

            $scope.removeData = function($params) {
                var cnfrm = confirm("Are you sure to delete?");
                if(cnfrm) {
                    $http.post('http://www.ngphp.com/api/removeData.php', {'id':$params})
                        .success(function(data) {
                            $scope.blogs = data;
                        })
                        .error(function(err) {
                            $log.error(err);
                        });
                } else {
                    //
                }

            };

        }]);
