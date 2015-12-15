Ext.define('WorkPlace.view.Task', {
    extend: 'Ext.window.Window',

    alias: 'widget.Task',

    requires: [
        'Ext.form.Panel',
        'WorkPlace.viewModel.Task',
        'WorkPlace.viewController.Task',
        'WorkPlace.store.Task'
    ],

    layout: {
        type: 'anchor'
    },

    listeners: {
        afterrender: 'onRender'
    },

    title: 'Task',
    closable: true,
    modal: true,
    constrain: true,
    viewModel: 'task',
    controller: 'task',
    maximized: true,
    scrollable: true,

    items: [
    {
        xtype: 'form',
        reference: 'form',
        bodyPadding: 50,
        items: [
            {
                xtype: 'textfield',
                name: 'title',
                fieldLabel: 'Subject',
                width: 700,
                readOnly: true
            },
            {
                xtype: 'combobox',
                name: 'createdById',
                fieldLabel: 'Created by',
                bind: {
                    store: '{performers}'
                },
                valueField: 'id',
                displayField: 'fullname',
                queryMode: 'local',
                readOnly: true
            },
            {
                xtype: 'datefield',
                name: 'expectedFinishDate',
                fieldLabel: 'Expected finish date',
                readOnly: true
            },
            {
                xtype: 'datefield',
                name: 'givenDate',
                fieldLabel: 'Given date',
                readOnly: true
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
                emptyText:'Select priority...',
                readOnly: true
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
                name: 'performerId',
                fieldLabel: 'Performer',
                bind: {
                    store: '{performers}'
                },
                valueField: 'id',
                displayField: 'fullname',
                queryMode: 'local',
                allowBlank: false,
                emptyText:'Select performer...'
            }
        ],
        buttons: [
            {
                text: 'Save changes',
                handler: 'onSaveChanges',
                formBind: true
            }
        ]
    }
    ]
});