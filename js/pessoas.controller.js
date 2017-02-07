(function() {
	angular.module('routes').controller('pessoasCtrl', pessoasCtrl);

	function pessoasCtrl($routeParams) {
		var vm = this;
		vm.sub = 'pessoas';
		vm.who = $routeParams.id;
	}
	pessoasCtrl.$inject = ['$routeParams'];
})();