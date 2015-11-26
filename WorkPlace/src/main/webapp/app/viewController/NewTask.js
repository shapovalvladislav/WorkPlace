Ext.define('WorkPlace.viewController.NewTask', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.newTask',

    views: [
        'newTask'
    ],

    onCreateTask: function(button) {
        var form = button.up('form').getForm();
        var title = form.findField('title').getValue();
        var expectedDate = form.findField('expected_date').getValue();
        var priority = form.findField('priority').getValue();
        var status = form.findField('status').getValue();
        var performerId = form.findField('performer_id').getValue();
        var comment = form.findField('comment').getValue();

        //TODO: add loading mask
        Ext.Ajax.request({
            url: '/WorkPlace/rest/tasks',
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            scope: this,
            jsonData: {
                action: 'add',
                info: {
                    title: title,
                    expectedDate: expectedDate.getTime(),
                    priority: priority,
                    status: status,
                    performerId: performerId,
                    comment: comment
                }
            },
            success: function(result) {
                this.getView().destroy();
            },
            failure: function(result) {
                this.getView().destroy();
            }
        });

    }

});