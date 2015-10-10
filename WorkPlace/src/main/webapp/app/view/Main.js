Ext.define('WorkPlace.view.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'WorkPlace.viewController.Main',
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
                title: 'Incomming Tasks'
            }, 
            {
                title: 'Outgoing Tasks'
            }, 
            {
                title: 'Company Employees'
            },
            {
                title: 'Statistics'
            }
        ]
    }]
});