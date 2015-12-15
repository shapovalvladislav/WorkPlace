Ext.define('WorkPlace.store.Task', {
    extend: 'Ext.data.Store',

    alias: 'store.task',

    requires: [
        'WorkPlace.overrides.JsonProxy'
    ],

    model: 'WorkPlace.model.Task',

    proxy: {
        type: 'jsonProxy',
        url: '/WorkPlace/rest/tasks',
        extraParams: {
            action: 'getTask'
        },
        reader: {
            type: 'json',
            rootProperty: 'info',
            successProperty: 'success'
        }
     }
});