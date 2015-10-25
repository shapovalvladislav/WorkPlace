Ext.define('WorkPlace.view.Employees', {
    extend: 'Ext.container.Container',
    xtype: 'employees',

    requires: [
        'WorkPlace.viewController.Employees'
    ],

    controller: 'employees',

    listeners: {
        render: 'onRender'
    },
    items: [
        {
            xtype: 'grid',
            reference: 'employeesGrid',
            plugins: 'gridfilters',
            columns: [
                {
                    text: 'Full Name',
                    width: 200,
                    dataIndex: 'fullname'
                },
                {
                    text: 'Department',
                    width: 150,
                    dataIndex: 'department',
                    filter: 'list'
                },
                {
                    text: 'Position',
                    width: 150,
                    dataIndex: 'position',
                },
                {
                    text: 'E-mail',
                    flex: 1,
                    dataIndex: 'email'
                }
            ]
        }
    ]
});