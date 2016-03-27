angular.module('app').service('serviceCallDataService', function () {
    var data = { 
        title: 'Annual Freezing Chain Maintenance',
        businessPartner: {
            name: 'Nestle AG',
            address: {
                street: 'City Center Street',
                city: 'Zurich',
                zipcode: 9000
            }
        },
        equipment: [
            {
                title: 'EFT Workload balancer'
            }, {
                title: 'HET Processing Module'
            }, {
                title: 'ABC Freezer Large'
            }, {
                title: 'Velcro Packing System'
            }
        ]
    };

    return {
        getData: function() {
            return data;
        },
        setData: function(d) {
            data = d;
        }
    };
});