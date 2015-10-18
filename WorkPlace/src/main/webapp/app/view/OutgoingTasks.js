Ext.define('WorkPlace.view.OutgoingTasks', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.outgoingTasks',

    requires: [
        'WorkPlace.viewController.OutgoingTasks',
        'WorkPlace.store.OutgoingTasks',
        'WorkPlace.viewModel.OutgoingTasks'
    ],

    layout: {
        type: 'fit'
    },

    bind: '{outgoingTasks}',

    viewModel: 'outgoingTasks',
    controller: 'outgoingTasks',

    listeners: {
        rowclick: 'showTask'
    },

    columns: [
        {
            hidden: true,
            dataIndex: 'id'
        },
        {
            text: 'Subject',
            flex: 3,
            dataIndex: 'title'
        },
        {
            text: 'Priority',
            flex: 1,
            dataIndex: 'priority'
        },
        {
            text: 'Expected Finish Date',
            flex: 1,
            dataIndex: 'expectedFinishDate'
        },
        {
            text: 'Status',
            flex: 1,
            dataIndex: 'status'
        }
    ]

});