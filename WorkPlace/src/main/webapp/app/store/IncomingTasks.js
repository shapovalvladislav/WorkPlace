Ext.define('WorkPlace.store.IncomingTasks', {
    extend: 'Ext.data.Store',

    alias: 'store.incomingTasks',

    requires: [
        'WorkPlace.overrides.JsonProxy'
    ],

    model: 'WorkPlace.model.IncomingTasks',
    autoLoad: true,

    proxy: {
        type: 'jsonProxy',
        url: '/WorkPlace/rest/tasks',
        extraParams: {
            action: 'getIncoming'
        },
        reader: {
            type: 'json',
            rootProperty: 'info',
            successProperty: 'success'
        }
     }
});