Ext.define('WorkPlace.view.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'WorkPlace.viewController.Main',
        'WorkPlace.view.Employees',
        'WorkPlace.view.IncomingTasks',
        'WorkPlace.view.OutgoingTasks',
        'WorkPlace.view.messages.Main',
        'WorkPlace.view.statistics.Main'
    ],

    xtype: 'main',

    controller: 'main',
    plugins: 'viewport',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        region: 'north',
        tbar: [
            {
                text: 'Log Out',
                handler: 'onClickButton'
            }
        ]
    },{
        region: 'center',
        xtype: 'tabpanel',
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
                title: 'Statistics',
                xtype: 'statistics'
            },
            {
                title: 'Messages',
                xtype: 'messages'
            }
        ]
    }]
});