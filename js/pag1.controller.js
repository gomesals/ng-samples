(function() {
	angular.module('routes').controller('pag1Ctrl', pag1Ctrl);

	function pag1Ctrl() {
		var vm = this;
		vm.sub = 'pagina 1';
	}
	pag1Ctrl.$inject = [];
})();