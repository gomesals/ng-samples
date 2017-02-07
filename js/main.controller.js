(function() {
	angular.module('routes').controller('mainCtrl', mainCtrl);

	function mainCtrl() {
		var vm = this;
		vm.sub = 'home';
	}
	mainCtrl.$inject = [];
})();