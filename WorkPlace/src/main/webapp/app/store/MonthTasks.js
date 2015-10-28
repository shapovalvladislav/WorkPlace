Ext.define('WorkPlace.store.MonthTasks', {
    extend: 'Ext.data.Store',
    alias: 'store.monthTasks',

    requires: [
        'WorkPlace.overrides.JsonProxy'
    ],

    model: 'WorkPlace.model.MonthTasks',

    proxy: {
         type: 'jsonProxy',
         url: '/WorkPlace/rest/statistics/year',
         reader: {
             type: 'json',
             rootProperty: 'info',
             successProperty: 'success'
         }
     }
});