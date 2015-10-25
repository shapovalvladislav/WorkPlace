Ext.define('WorkPlace.model.Message', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'content'
        },
        {
            name: 'date'
        },
        {
            name: 'fromId',
            type: 'int'
        },
        {
            name: 'toId',
            type: 'int'
        }
    ]
});