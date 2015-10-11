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
            type: 'int',
            convert: function (value, record) {
                return WorkPlace.config.constants.priorities[value];
            }
        },
        {
            name: 'expectedFinishDate',
            type: 'string'
        },
        {
            name: 'status',
            type: 'int',
            convert: function (value, record) {
                return WorkPlace.config.constants.statuses[value];
            }
        }
    ]
});