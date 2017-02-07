(function() {
	angular.module('routes', ['ngRoute']).config(config);

	function config($routeProvider, $locationProvider) {
		$routeProvider.when('/pagina1', {
			templateUrl: 'templates/template2.html',
			controller: 'pag1Ctrl',
			controllerAs: 'vm'
		}).when('/pagina2', {
			templateUrl: 'templates/template3.html',
			controller: 'pag2Ctrl',
			controllerAs: 'vm'
		}).when('/pessoa/:id', {
			templateUrl: 'templates/template4.html',
			controller: 'pessoasCtrl',
			controllerAs: 'vm'
		}).otherwise({
			templateUrl: 'templates/template1.html',
			controller: 'mainCtrl',
			controllerAs: 'vm'
		});
		$locationProvider.html5Mode(true);
	}
})();