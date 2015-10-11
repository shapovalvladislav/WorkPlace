Ext.define('WorkPlace.model.IncomingTasks', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'priority',
            type: 'string'
        },
        {
            name: 'expectedFinishDate',
            type: 'string'
        },
        {
            name: 'status',
            type: 'string'
        }
    ]
});