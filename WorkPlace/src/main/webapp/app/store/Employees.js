Ext.define('WorkPlace.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',

    requires: [
        'WorkPlace.overrides.JsonProxy'
    ],

    model: 'WorkPlace.model.Employee',
    autoLoad: true,

    proxy: {
         type: 'jsonProxy',
         url: '/WorkPlace/rest/employees/get',
         reader: {
             type: 'json',
             rootProperty: 'info',
             successProperty: 'success'
         }
     }
});