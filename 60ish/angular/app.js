var app = angular.module("SampleApp", ['ngRoute']); /* Array takes other modules which are dependencies for this module */

app.controller("SimpleController", function() {
    this.fruits = [{
        name: 'mango',
        season: 'summer'
    }, {
        name: 'jackfruit',
        season: 'monsoon'
    }, {
        name: 'banana',
        season: 'all'
    }];

    this.addFruit = function() {
      this.fruits.push({
        name: this.newfruit.name,
        season: this.newfruit.season
      });
    };
});

/*var controllers = {};
controllers.SimpleController = function() {
    this.fruits = [{
        name: 'mango',
        season: 'summer'
    }, {
        name: 'jackfruit',
        season: 'monsoon'
    }, {
        name: 'banana',
        season: 'all'
    }];
};

controllers.AnotherController = function() {
    this.vegetables = [{
        name: 'brinjal',
        season: 'summer'
    }, {
        name: 'pumpkin',
        season: 'monsoon'
    }, {
        name: 'onion',
        season: 'all'
    }];
};

app.controller(controllers);*/

app.config(function($routeProvider, $locationProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/view1.html',
      controller: 'SimpleController'
    })
    .when('/', {
      templateUrl: 'partials/view2.html',
      controller: 'SimpleController'
    })
    .otherwise({
      redirectTo: '/'
    });

});
