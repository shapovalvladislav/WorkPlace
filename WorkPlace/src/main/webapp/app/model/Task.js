Ext.define('WorkPlace.model.Task', {
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
            type: 'int',
            convert: function (value, record) {
                return WorkPlace.config.constants.priorities[value];
            }
        },
        {
            name: 'expectedFinishDate',
            type: 'date'
        },
        {
            name: 'actualFinishDate',
            type: 'string',
        },
        {
            name: 'status',
            type: 'int',
            convert: function (value, record) {
                return WorkPlace.config.constants.statuses[value];
            }
        },
        {
            name: 'createdById',
            type: 'int'
        },
        {
            name: 'givenDate',
            type: 'date'
        },
        {
            name: 'performerId',
            type: 'int'
        }
    ]
});