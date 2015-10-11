Ext.define('WorkPlace.view.Auth', {
    extend: 'Ext.window.Window',

    xtype: 'auth',

    requires: [
        'WorkPlace.viewController.Auth',
        'Ext.form.Panel'
    ],

    controller: 'auth',
    bodyPadding: 10,
    title: 'Authentication',
    closable: false,
    autoShow: true,
    constrain: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'login',
                fieldLabel: 'Login',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            }
        ],
        buttons: [
            {
                text: 'Login',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ]
    }

});