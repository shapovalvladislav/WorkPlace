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
        url: '/WorkPlace/rest/tasks/get',
        extraParams: { assignerId: localStorage.getItem('userId') },
        reader: {
            type: 'json',
            rootProperty: 'info',
            successProperty: 'success'
        }
     }
});