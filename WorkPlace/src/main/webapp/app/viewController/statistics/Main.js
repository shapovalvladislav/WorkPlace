Ext.define('WorkPlace.viewController.statistics.Main', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.statistics',

    requires: [
        'WorkPlace.store.MonthTasks',
        'WorkPlace.store.EmployeesTasks'
    ],

    onAfterRender: function() {
        this.lookupReference('yearChart').setStore(Ext.create('WorkPlace.store.MonthTasks'));
        this.lookupReference('employee').setStore(Ext.StoreManager.lookup('WorkPlace.store.Employees'));
        var years = [];
        var startYear = new Date().getFullYear();
        for (var i = 0; i < 5; i++) {
            years.push(startYear--);
        }
        var store = Ext.create('Ext.data.ArrayStore', {
            fields: [
               {name: 'year', type: 'int'},
            ],
            data: years
        });
        this.lookupReference('year').setConfig('store', years);
    },

    buildChart: function() {
        var chart = this.lookupReference('yearChart');
        var store = chart.getStore();
        store.getProxy().setExtraParams({
            performerId: this.lookupReference('employee').getValue(),
            year: this.lookupReference('year').getValue(),
            completed: this.lookupReference('taskType').getValue()
        });
        store.load({
            callback: function(records, operation, success) {
                chart.setVisible(!Ext.isEmpty(records));
                var max = 0;
                Ext.each(records, function(v) {
                    var count = v.get('count');
                    if (count > max) {
                        max = count;
                    }
                });

                var axis = chart.getAxes()[0];
                axis.setMinimum(0);
                axis.setMaximum(max);
                axis.setMajorTickSteps(max);
                chart.redraw();
            },
            scope: this
        });
    },

    buildPieChart: function() {
        var pie = this.lookupReference('pie');
        var completed = this.lookupReference('taskTypePie').getValue();
        var from = new Date(this.lookupReference('pieFrom').getValue()).getTime();
        var to = new Date(this.lookupReference('pieTo').getValue()).getTime();
        var store = pie.getStore();
        if (Ext.getClassName(store) !== 'WorkPlace.store.EmployeesTasks') {
            store = Ext.create('WorkPlace.store.EmployeesTasks');
            pie.setStore(store);
        }
        store.getProxy().setExtraParams({
            fromDate: from,
            toDate: to,
            completed: completed
        });
        store.load({
            callback: function(records, operation, success) {
                pie.setVisible(!Ext.isEmpty(records));
            },
            scope: this
        });
    }
});