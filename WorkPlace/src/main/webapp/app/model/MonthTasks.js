Ext.define('WorkPlace.model.MonthTasks', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'month',
        },
        {
            name: 'count',
            type: 'int'
        }
    ]
});