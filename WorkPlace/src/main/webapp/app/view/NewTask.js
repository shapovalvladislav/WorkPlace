Ext.define('WorkPlace.view.NewTask', {
    extend: 'Ext.window.Window',

    alias: 'widget.newTask',

    requires: [
        'Ext.form.Panel',
        'WorkPlace.viewModel.NewTask',
        'WorkPlace.viewController.NewTask'
    ],

    layout: {
        type: 'anchor'
    },

    title: 'Create Task',
    closable: true,
    autoShow: true,
    modal: true,
    constrain: true,
    viewModel: 'newTask',
    controller: 'newTask',


    items: {
        xtype: 'form',
        reference: 'form',
        bodyPadding: 50,
        items: [
            {
                xtype: 'textfield',
                name: 'title',
                fieldLabel: 'Subject',
                allowBlank: false,
                width: 700
            },
            {
                xtype: 'datefield',
                name: 'expected_date',
                fieldLabel: 'Expected finish date',
                allowBlank: false
            },
            {
                xtype: 'combobox',
                name: 'priority',
                fieldLabel: 'Priority',
                store: new Ext.data.SimpleStore({
                    id:0,
                    fields: [
                        'value',
                        'displayValue'
                    ],
                    data: [
                        [ 0, WorkPlace.config.constants.priorities[0] ],
                        [ 1, WorkPlace.config.constants.priorities[1] ]
                    ]
                }),
                valueField: 'value',
                displayField: 'displayValue',
                queryMode: 'local',
                allowBlank: false,
                emptyText:'Select priority...'
            },
            {
                xtype: 'combobox',
                name: 'status',
                fieldLabel: 'Status',
                store: new Ext.data.SimpleStore({
                    id:0,
                    fields: [
                        'value',
                        'displayValue'
                    ],
                    data: [
                        [ 0, WorkPlace.config.constants.statuses[0] ],
                        [ 1, WorkPlace.config.constants.statuses[1] ],
                        [ 2, WorkPlace.config.constants.statuses[2] ]
                    ]
                }),
                valueField: 'value',
                displayField: 'displayValue',
                queryMode: 'local',
                allowBlank: false,
                emptyText:'Select status...'
            },
            {
                xtype: 'combobox',
                name: 'performer_id',
                fieldLabel: 'Performer',
                bind: {
                    store: '{performers}'
                },
                valueField: 'id',
                displayField: 'fullname',
                queryMode: 'local',
                allowBlank: false,
                emptyText:'Select performer...'
            },
            {
                xtype: 'textareafield',
                name: 'comment',
                fieldLabel: 'Comment',
                allowBlank: false,
                width: 700
            }
        ],
        buttons: [
            {
                text: 'Create',
                handler: 'onCreateTask',
                formBind: true
            }
        ]
    }
});