Ext.define('WorkPlace.view.Employees', {
    extend: 'Ext.container.Container',
    xtype: 'employees',

    requires: [
        'WorkPlace.viewModel.Employee',
        'WorkPlace.viewController.Employees'
    ],

    viewModel: 'employee',
    controller: 'employees',

    items: [
        {
            xtype: 'grid',
            bind: '{employees}',
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