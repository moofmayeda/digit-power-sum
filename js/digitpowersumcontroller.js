digitPowerSum.controller('numbersController', function StudentsCtrl($scope) {
  $scope.powersums = [];

  var i = 1;
  var sum = function(number) {
    var digits = number.toString().split("").map(function(digit) {
      return parseInt(digit);
    });
    var sum = digits.reduce(function(a, b) { return a + b; });
    return sum;
  }
  var series = function(n) {
    var powers = [];
    for(var i = 2; i<100; i++) {
      for(var j = 2; j<10; j++) {
        var number = Math.pow(i, j)
        if(sum(number) == i) {
          powers.push(number);
        }
      }
    }
    var sorted = powers.sort(function(a, b){return a-b;})
    return sorted[n-1];
  }

  $scope.findValue = function() {
    $scope.number = series($scope.findnth);
    $scope.findnth = null;
  }

  $scope.generateNext = function() {
    $scope.powersums.push(series(i));
    i=i + 1;
  }

});
