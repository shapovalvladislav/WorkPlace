Ext.define('WorkPlace.viewController.IncomingTasks', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.incomingTasks',

    requires: [
        'WorkPlace.view.Task'
    ],

    views: [
        'incomingTasks'
    ],

    showTask: function(grid, record) {
        var id = record.get('id');
        var w = Ext.widget('Task');
        w.taskId = id;
        w.show();
    }

});