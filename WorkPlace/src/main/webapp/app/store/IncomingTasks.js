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
        url: '/WorkPlace/rest/tasks/get',
        extraParams: { assigneeId: 1 },//TODO
        reader: {
            type: 'json',
            rootProperty: 'info',
            successProperty: 'success'
        }
     }
});