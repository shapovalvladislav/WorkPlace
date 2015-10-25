Ext.define('WorkPlace.view.messages.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'WorkPlace.viewModel.messages.Main',
        'WorkPlace.view.messages.Dialog',
        'WorkPlace.viewController.messages.Main'
    ],

    xtype: 'messages',

    viewModel: 'messagesMain',
    controller: 'messages',

    layout: {
        type: 'border'
    },

    bodyStyle: 'background-color: white',

    items: [
        {
            xtype: 'grid',
            region: 'west',
            width: 250,
            title: 'People',
            itemId: 'peopleGrid',
            bind: {
                store: '{people}'
            },
            listeners: {
                select: 'onEmployeeSelect'
            },
            columns: [
                {
                    text: 'People',
                    dataIndex: 'fullname',
                    flex: 1
                }
            ],
        },
        {
            xtype: 'panel',
            region: 'center',
            reference: 'dialogs',
            title: 'Dialog',
            layout: 'card',
            margin: '0 5 5 5',
            border: true,
            tbar: ['->',
                {
                    xtype: 'button',
                    text: 'Refresh',
                    handler: 'onRefresh'
                }
            ],
            bbar: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'right'
                    },
                    margin: '0 30 0 0',
                    width: '100%',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'message',
                            reference: 'msgArea',
                            height: 120,
                            fieldStyle: {
                                display: 'inherit'
                            },
                            border: 1,
                            style: {
                                borderColor: '#157fcc',
                                borderStyle: 'solid'
                            },
                            width: '100%'
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            handler: 'onSend'
                        }
                    ]
                }
            ]
        }
    ]
});