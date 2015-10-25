Ext.define('WorkPlace.viewController.messages.Main', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messages',

    requires: [
        'WorkPlace.view.messages.Dialog'
    ],

    prepareDialog: function(employee) {
        var employeeId = employee.getId(),
            dialogsContainer = this.lookupReference('dialogs'),
            itemId = Ext.String.format('dialog-{0}', employeeId);

        if (Ext.isNumeric(employeeId) && !dialogsContainer.getComponent(itemId)) {
            dialogsContainer.add({
                xtype: 'dialog',
                employee: employeeId
            });
        }
    },

    activateSiteCard: function(grid, employee) {
        this.lookupReference('dialogs').setActiveItem(Ext.String.format('dialog-{0}', employee.getId()));
    },

    onEmployeeSelect: function(grid, employee) {
        var employeeId = employee.getId(),
            dialogsContainer = this.lookupReference('dialogs'),
            itemId = Ext.String.format('dialog-{0}', employeeId);

        if (!dialogsContainer.getComponent(itemId)) {
            dialogsContainer.add({
                xtype: 'dialog',
                itemId: itemId,
                employeeId: employeeId
            });
        }

        this.activateSiteCard(grid, employee);
    },

    onSend: function() {
        var dlg = this.lookupReference('dialogs').getLayout().getActiveItem();
        if (!dlg) {
            return;
        }

        var toId = dlg.employeeId;
        var content = this.lookupReference('msgArea').getValue();
        var record = Ext.create('WorkPlace.model.Message');
        var store = dlg.getViewModel().getStore('messages');
        store.getProxy().setExtraParams({
            action: 'add',
            info: {
                employee2: toId,
                content: content,
                date: new Date().getTime()
            }
        });
        store.add(record);
        store.sync();
        this.lookupReference('msgArea').setValue('');
        dlg.getController().refresh();
    },

    onRefresh: function() {
        var dlg = this.lookupReference('dialogs').getLayout().getActiveItem();
        if (!dlg) {
            return;
        }

        dlg.getController().refresh();
    }
});