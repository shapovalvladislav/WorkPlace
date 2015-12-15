Ext.define('WorkPlace.viewController.Task', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.task',

    views: [
        'task'
    ],

    onRender: function() {
        var store = this.getViewModel().get('task');
        var proxy = store.getProxy();
        proxy.extraParams = {
            action: 'getTask',
            id: this.getView().taskId
        };
        // Ext.getBody().mask('Processing...');
        store.load({
            callback: this.showTask,
            scope: this
        });
    },

    showTask: function() {
        var store = this.getViewModel().get('task');
        var task;
        store.each(function(elm) {
            task = elm
        });
        var form = this.getView().items.items[0].getForm();
        form.loadRecord(task);
        var view = this.getView();
        //TODO: comments
    },

    onSaveChanges: function(button) {

    }

});