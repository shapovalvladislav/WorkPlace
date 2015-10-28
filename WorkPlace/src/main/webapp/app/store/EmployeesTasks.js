Ext.define('WorkPlace.store.EmployeesTasks', {
    extend: 'Ext.data.Store',
    alias: 'store.employeesTasks',

    requires: [
        'WorkPlace.overrides.JsonProxy'
    ],

    model: 'WorkPlace.model.EmployeesTasks',

    proxy: {
         type: 'jsonProxy',
         url: '/WorkPlace/rest/statistics/employees',
         reader: {
             type: 'json',
             rootProperty: 'info',
             successProperty: 'success'
         }
     }
});