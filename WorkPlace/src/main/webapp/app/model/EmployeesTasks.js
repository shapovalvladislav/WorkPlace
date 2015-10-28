Ext.define('WorkPlace.model.EmployeesTasks', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'fullname',
        },
        {
            name: 'count',
            type: 'int'
        }
    ]
});