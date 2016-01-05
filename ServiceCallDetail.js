(function() {

	angular.module('app').directive('serviceCallDetail', function() {
		return {
			template: serviceCallDetailTemplate + serviceCallDetailStyle,
			controller: ServiceCallDetailController,
			controllerAs: 'scdCtrl'
		};
	});

	// style
	var serviceCallDetailStyle = `
		<style>
			.service-call-detail {
				border: 1px red solid; 
				padding: 10px;
			}
		</style>
	`;

	// template
	var serviceCallDetailTemplate = `
		<div class="service-call-detail">
			<h4>Service Call Detail Directive</h4>
			<p>Title: <span ng-bind="scdCtrl.data.title"></span></p>

			<business-partner></business-partner>

			<equipment></equipment>

			<hr />
			<button ng-click="scdCtrl.patchData()">Data: Patch</button>
			<button ng-click="scdCtrl.postData()">Data: Post</button>

			<hr />
			<button ng-click="scdCtrl.patchBusinessPartner()">Business Partner: Patch</button>
			<button ng-click="scdCtrl.postBusinessPartner()">Business Partner: Post</button>
		</div>
	`;

	// controller
	function ServiceCallDetailController(serviceCallDataService) {
		this.data = serviceCallDataService.getData();

		this.patchBusinessPartner = function() {
			this.data.businessPartner.address.street = 'Ocean Drive';
		};

		this.postBusinessPartner = function() {
			this.data.businessPartner = {
				name: 'Procter & Gamble',
				address: {
					street: 'Healthy Products Lane',
					city: 'Los Angeles',
					zipcode: 92037
				}
			};
		};

		this.patchData = function() {
			this.data.title = 'Exchange Coolant for ESX5000-SR';
		};

		this.postData = function() {
			this.data = { 
				title: 'Change Oil Filter',
				businessPartner: {
					name: 'British Petrol Company',
					address: {
						street: 'Buckingham Square',
						city: 'London',
						zipcode: 12000
					}
				},
				equipment: [
					{
						title: 'Equipment 1'
					}, {
						title: 'Equipment 3'
					}, {
						title: 'Equipment 3'
					}, {
						title: 'Equipment 4'
					}, {
						title: 'Equipment 5'
					}
				]
			};
		};
	}

})();