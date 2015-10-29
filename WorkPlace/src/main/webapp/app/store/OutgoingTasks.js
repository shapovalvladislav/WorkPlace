Ext.define('WorkPlace.store.OutgoingTasks', {
    extend: 'Ext.data.Store',

    alias: 'store.outgoingTasks',

    requires: [
        'WorkPlace.overrides.JsonProxy'
    ],

    model: 'WorkPlace.model.OutgoingTasks',
    autoLoad: true,

    proxy: {
        type: 'jsonProxy',
        url: '/WorkPlace/rest/tasks',
        extraParams: {
            action: 'getOutgoing'
        },
        reader: {
            type: 'json',
            rootProperty: 'info',
            successProperty: 'success'
        }
     }
});