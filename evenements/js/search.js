function inputChange(){
  var searchValue = document.getElementById('searchBox').value;
  if(searchValue.length > 0){
    document.getElementById('articles').style.display = "none";
    document.getElementById('searchResults').style.display = "block";
    document.querySelector('ul.pagination').style.display = "none";
  }else{
    document.getElementById('articles').style.display = "block";
    document.getElementById('searchResults').style.display = "none";
    document.querySelector('ul.pagination').style.display = "block";
  }

}


var contentsApp = angular.module('contentsApp', []);
contentsApp.config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]);

contentsApp.controller('searchController', function ($scope, $http) {
  $http.get('/data.json').success(function(data) {
    $scope.results = data;
  });
});
