Ext.define('WorkPlace.viewModel.Employee', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.employee',

    stores: {
        employees: {
            type: 'employees'
        }
    }
});