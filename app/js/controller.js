angular.module('ecommerce', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/pages/bemvindo.html',
                controller: 'BemVindoController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    
    .controller('BemVindoController', function($scope, $http) {
        $scope.init = function() {
            $scope.listaCategorias = {}

            $http({
                method: 'GET',
                url: '/api/categoria/consultar.php?retornarImagem=sim'
            }).then(function(response) {
                $scope.listaCategorias = response.data;
            });
        }
    });

    
