(function() {

	angular.module('app').directive('businessPartner', function() {
		return {
			template: businessPartnerTemplate + businessPartnerStyle,
			controller: BusinessPartnerController,
			controllerAs: 'businessPartnerCtrl'
		};
	});

	// style
	var businessPartnerStyle = `
		<style>
			.business-partner {
				border: 1px blue solid; padding: 10px; margin-top: 10px;
			}
		</style>
	`;

	// template
	var businessPartnerTemplate = `
		<div class="business-partner">
			<h4>Business Partner Directive</h4>
			<p>
				<b><span ng-bind="businessPartnerCtrl.data.businessPartner.name"></span></b><br />
				<span ng-bind="businessPartnerCtrl.data.businessPartner.address.street"></span><br />
				<span ng-bind="businessPartnerCtrl.data.businessPartner.address.zipcode"></span> 
				<span ng-bind="businessPartnerCtrl.data.businessPartner.address.city"></span>
			</p>
		</div>
	`;

	// controller
	function BusinessPartnerController($scope, serviceCallDataService) {
		this.data = serviceCallDataService.getData();
	}

})();