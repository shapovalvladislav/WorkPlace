Ext.define('WorkPlace.viewController.IncomingTasks', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.incomingTasks',

    views: [
        'incomingTasks'
    ],

    init: function() {
        this.control({
            'incomingTasks': {
                rowclick: this.showTask
            }
        });
    },

    showTask: function(grid, record) {
        var id = record.get('id');
        //TODO: open Task window
    }

});