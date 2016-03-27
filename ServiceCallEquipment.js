(function() {

    angular.module('app').directive('equipment', function() {
        return {
            template: equipmentTemplate + equipmentStyle,
            controller: EquipmentController,
            controllerAs: 'equipmentCtrl'
        };
    });

    // style
    var equipmentStyle = `
        <style>
            .equipment {
                border: 1px green solid; 
                padding: 10px; 
                margin-top: 10px;
            }
        </style>
    `;

    // template
    var equipmentTemplate = `
        <div class="equipment" style="">
            <h4>Equipment Directive</h4>
            <p>Equipment to be maintained:</p>
            <ul>
                <li ng-repeat="equipment in equipmentCtrl.data.equipment" ng-bind="equipment.title"></li>
            </ul>
        </div>
    `;

    // controller
    function EquipmentController($scope, serviceCallDataService) {
        this.data = serviceCallDataService.getData();
    }
    
})();