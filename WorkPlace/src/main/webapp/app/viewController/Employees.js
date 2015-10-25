Ext.define('WorkPlace.viewController.Employees', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employees',

    onRender: function() {
        this.lookupReference('employeesGrid').setStore(Ext.StoreManager.lookup('WorkPlace.store.Employees'));
    }

});