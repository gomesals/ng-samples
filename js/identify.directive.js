(function() {
	angular.module('routes').directive('identify', identify);

	function identify() {
		var vm = this;
		return {
			template: '<p>Name: {{vm.who}}</p>'
		};
	}
	identify.$inject = [];
})();