define([
    'angular',
    'app/boot'
], function (angular) {
    return angular.module('main')
        .controller('PromisesController', function ($scope, $q) {

            var someFunction = function (value) {
                var defer = $q.defer()
                setTimeout(function () {
                    var theRandom = Math.random();
                    if (Math.random() < 0) {
                        defer.resolve({val:value, rand:theRandom});

                    } else {

                        defer.reject(value, theRandom);
                    }
                }, 1000);
                return defer.promise;

            };

            $scope.promptTest = function () {
//
//                setTimeout(function(){
//                    console.log('1000');
//                }, 1000)
//
//                setTimeout(function(){
//                    console.log('2000');
//                }, 2000)
//
//                setTimeout(function(){
//                    console.log('3000');
//                }, 3000)

//                someFunction('here', function (string, random) {
//                        console.log(string, random, 'good');
//                        someFunction()
//
//
//
//                    }, function (string, random) {
//                        console.log(string, random, 'error');
//                    }
//                )
                console.log(Math.random(),'--ran');

                someFunction('here').then(function (string) {
                        console.log('first sucess');
                        return string.val;
                    }
                ).then(function (string) {
                        console.log('success 2 ');
                        return;
                    }

                ).catch(function(){
                        console.log('global error');
                    });





                var pom2 = $q.defer();
                pom2.resolve('stufff');
                return pom2;
            }


        });
});