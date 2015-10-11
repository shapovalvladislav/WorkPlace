Ext.define('WorkPlace.viewController.Employees', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employees',

    fullnameRenderer: function(val, meta, record) {
        console.log(val);
        console.log(record);
    }

});