Ext.define('WorkPlace.view.statistics.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'statistics',

    tabPosition: 'left',
    tabRotation: 0,
    plain: true,

    requires: [
        'WorkPlace.view.statistics.Bar',
        'WorkPlace.view.statistics.Pie',
        'WorkPlace.store.MonthTasks',
        'WorkPlace.viewController.statistics.Main',
    ],

    controller: 'statistics',

    listeners: {
        afterrender: 'onAfterRender'
    },

    items: [
        {
            title: 'Tasks per Year',
            items: [
                {
                    xtype: 'form',
                    width: 300,
                    margin: '10 10 10 10',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Criteria',
                            items: [
                                {
                                    xtype: 'combobox',
                                    reference: 'employee',
                                    fieldLabel: 'Employee',
                                    allowBlank: false,
                                    displayField: 'fullname',
                                    valueField: 'id',
                                    fieldStyle: {
                                        display: 'inherit'
                                    },
                                    editable: false,
                                    queryMode: 'local'
                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'taskType',
                                    fieldLabel: 'Type of task',
                                    store: [ [1,'Completed'], [ 0, 'Failed' ] ],
                                    allowBlank: false,
                                    fieldStyle: {
                                        display: 'inherit'
                                    },
                                    editable: false,
                                    queryMode: 'local',
                                },
                                {
                                    xtype: 'combobox',
                                    store: [],
                                    reference: 'year',
                                    allowBlank: false,
                                    fieldLabel: 'Year',
                                    fieldStyle: {
                                        display: 'inherit'
                                    },
                                    editable: false,
                                    queryMode: 'local'
                                }
                            ]
                        },
                    ],
                    buttons: [
                        {
                            text: 'Build a Chart',
                            disabled: true,
                            formBind: true,
                            handler: 'buildChart'
                        }
                    ]
                },
                {
                    xtype: 'bar'
                }
            ]
        },
        {
            title: 'Subordinates',
            autoScroll: true,
            items: [
                {
                    xtype: 'form',
                    width: 300,
                    margin: '10 10 10 10',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Criteria',
                            items: [
                                {
                                    xtype: 'combobox',
                                    reference: 'taskTypePie',
                                    fieldLabel: 'Type of task',
                                    store: [ [1,'Completed'], [ 0, 'Failed' ] ],
                                    allowBlank: false,
                                    fieldStyle: {
                                        display: 'inherit'
                                    },
                                    editable: false,
                                    queryMode: 'local',
                                },
                                {
                                    xtype: 'datefield',
                                    reference: 'pieFrom',
                                    anchor: '100%',
                                    fieldLabel: 'From',
                                    name: 'from_date'
                                },
                                {
                                    xtype: 'datefield',
                                    reference: 'pieTo',
                                    anchor: '100%',
                                    fieldLabel: 'To',
                                    name: 'to_date',
                                    value: new Date()  // defaults to today
                                }
                            ],
                        }
                    ],
                    buttons: [
                        {
                            text: 'Build a Chart',
                            disabled: true,
                            formBind: true,
                            handler: 'buildPieChart'
                        }
                    ]
                },
                {
                    xtype: 'pie'
                }
            ]
        }
    ]

});