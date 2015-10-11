Ext.define('WorkPlace.viewModel.IncomingTasks', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.incomingTasks',

    stores: {
        incomingTasks: {
            type: 'incomingTasks'
        }
    }

});