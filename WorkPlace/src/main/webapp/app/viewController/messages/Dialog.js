Ext.define('WorkPlace.viewController.messages.Dialog', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dialog',

    init: function() {
        this.refresh();
    },

    refresh: function() {
        var store = this.getViewModel().get('messages');
        var view = this.getView();
        var proxy = store.getProxy();
        proxy.extraParams = {
            action: 'get',
            info: {
                employee2: this.getView().employeeId
            }
        };
        Ext.getBody().mask('Processing...');
        store.load({
            callback: this.addMessages,
            scope: this
        });
    },

    addMessages: function() {
        var view = this.getView();
        view.removeAll();
        var employeesStore = Ext.StoreManager.lookup('WorkPlace.store.Employees');
        this.getViewModel().get('messages').each(function(message) {
            var title = employeesStore.findRecord('id', message.get('fromId')).get('fullname') +
                " - " + new Date(message.get('date')).toLocaleString();
            var isOwnMessage = Ext.util.Cookies.get('userId') == message.get('fromId');
            view.add({
                xtype: 'panel',
                title: title,
                html: message.get('content'),
                grow: true,
                margin: '10 15 10 10',
                bodyStyle: 'padding: 10px;',
                border: true,
                style: {
                    float: isOwnMessage ? 'right' : 'left'
                },
                width: '70%',
                minHeight: 120
            });
        });
        view.doLayout();
        view.getEl().scroll('b', Infinity);
        Ext.getBody().unmask();
    }



});