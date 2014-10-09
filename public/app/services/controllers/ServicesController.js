define([
    'angular',
    'app/boot'
], function (angular) {

    function TestObject(){
        this.greeting = 'Greeting from class';
        console.log('Should be logged once');
    }

    function TestObjectForFactory(){
        this.greeting = 'Greeting from class for factory';
    }


    return angular.module('main')
        .factory('TestFactoryService', function(){
            return {
                greeting: 'some greeting'
            }
        })
        .factory('TestFactoryFactoryService', function(){
            return {
                getObject: function(){
                    return new TestObjectForFactory()
                }
            };
        })
        .service('TestServiceService', TestObject)

        .controller('ServicesController', function ($scope, TestFactoryService, TestServiceService, TestFactoryFactoryService) {
            $scope.greeting = 'Hello World';
            $scope.TestFactoryService = TestFactoryService;
            TestFactoryService.setFromOuter = 'Set from outer controller';

            $scope.TestServiceService = TestServiceService;
            TestServiceService.setFromOuter = 'Set from outer controller to service';


            $scope.TestFactoryFactoryObject = TestFactoryFactoryService.getObject();
            $scope.TestFactoryFactoryObject.setFromOuter = 'Set from outer controller to service';
        })
        .controller('InnerServicesController', function ($scope, TestFactoryService, TestServiceService, TestFactoryFactoryService) {
            $scope.innerGreeting = 'Inner Hello World';
            $scope.innerTestFactoryService = TestFactoryService;
            $scope.innerTestServiceService = TestServiceService;
            $scope.innerTestFactoryFactoryObject = TestFactoryFactoryService.getObject();

        });
});