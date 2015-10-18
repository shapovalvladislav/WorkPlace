Ext.define('WorkPlace.viewController.OutgoingTasks', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.outgoingTasks',

    views: [
        'outgoingTasks'
    ],

    showTask: function(grid, record) {
        var id = record.get('id');
        //TODO: open Task window
    }

});