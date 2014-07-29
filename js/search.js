function inputChange(){
  var searchValue = document.getElementById('searchBox').value;
  if(searchValue.length > 0){
    document.getElementById('articles').style.display = "none";
    document.getElementById('searchResults').style.display = "block";
  }else{
    document.getElementById('articles').style.display = "block";
    document.getElementById('searchResults').style.display = "none";
  }

}


var contentsApp = angular.module('contentsApp', []);
contentsApp.config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]);

contentsApp.controller('searchController', function ($scope, $http) {
  $http.get('/data.json').success(function(data) {

  });
});
