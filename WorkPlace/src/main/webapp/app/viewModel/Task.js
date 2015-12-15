Ext.define('WorkPlace.viewModel.Task', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.task',

    stores: {
        task: {
            type: 'task'
        },
        performers: {
           source: 'WorkPlace.store.Employees'
        }
    }

});