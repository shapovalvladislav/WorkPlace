Ext.define('WorkPlace.model.Employee', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name'
        },
        {
            name: 'surname'
        },
        {
            name: 'fullname',
            persist: false,
            convert: function(val, record) {
                var data = record.getData();
                return data.name + ' ' + data.surname;
            }
        },
        {
            name: 'department'
        },
        {
            name: 'position'
        },
        {
            name: 'email'
        }
    ]
});