Ext.define('WorkPlace.view.IncomingTasks', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.incomingTasks',

    requires: [
        'WorkPlace.viewController.IncomingTasks',
        'WorkPlace.store.IncomingTasks',
        'WorkPlace.viewModel.IncomingTasks'
    ],

    layout: {
        type: 'fit'
    },

    bind: '{incomingTasks}',

    viewModel: 'incomingTasks',
    controller: 'incomingTasks',

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