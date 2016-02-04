function inputChange(){
  var searchValue = document.getElementById('searchBox').value;
  if(searchValue.length > 0){
    document.getElementById('articles').style.display = "none";
    document.getElementById('searchResults').style.display = "block";
    document.querySelector('ul.pagination').style.display = "none";
    window.location.hash = searchValue;
  }else{
    document.getElementById('articles').style.display = "block";
    document.getElementById('searchResults').style.display = "none";
    document.querySelector('ul.pagination').style.display = "block";
    window.location.hash = "";
  }
}

document.querySelector('#contents #searchResults article .closeSearch').addEventListener('click', function(){
    document.getElementById('articles').style.display = "block";
    document.getElementById('searchResults').style.display = "none";
    document.querySelector('ul.pagination').style.display = "block";
    window.location.hash = "";
    document.getElementById('searchBox').value = "";
});

var contentsApp = angular.module('contentsApp', []);
contentsApp.config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]);

contentsApp.controller('searchController', function ($scope, $http) {
  $scope.searchValue = window.location.hash.replace("#","");
  document.getElementById('searchBox').value = $scope.searchValue;
  inputChange();
  $http.get('/API/data.json').success(function(data) {
    $scope.results = data;
  });
  $scope.searchTag = function(theTag){
    $scope.searchValue = theTag;
    document.getElementById('searchBox').value = theTag
    inputChange();
  };
});
