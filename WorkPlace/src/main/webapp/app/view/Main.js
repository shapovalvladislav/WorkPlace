Ext.define('WorkPlace.view.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'WorkPlace.viewController.Main',
        'WorkPlace.view.Employees',
        'WorkPlace.view.IncomingTasks',
        'WorkPlace.view.OutgoingTasks',
        'WorkPlace.view.messages.Main',
        'WorkPlace.view.NewTask'
    ],

    xtype: 'main',

    controller: 'main',
    plugins: 'viewport',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'tabpanel',
        tabBar:     {
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    text: 'Create Task',
                    handler: 'onCreateTask'
                },
                {
                    xtype: 'button',
                    text: 'Log Out',
                    handler: 'onClickButton'
                }
            ]
        },
        items:[
            {
                title: 'Incomming Tasks',
                xtype: 'incomingTasks'
            },
            {
                title: 'Outgoing Tasks',
                xtype: 'outgoingTasks'
            },
            {
                title: 'Company Employees',
                xtype: 'employees'
            },
            {
                title: 'Statistics'
            },
            {
                title: 'Messages',
                xtype: 'messages'
            }
        ]
    }]
});