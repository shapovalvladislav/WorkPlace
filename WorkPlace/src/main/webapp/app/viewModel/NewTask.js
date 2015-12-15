Ext.define('WorkPlace.viewModel.NewTask', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.newTask',

    stores: {
        performers: {
            source: 'WorkPlace.store.Employees'
        }
    }

});