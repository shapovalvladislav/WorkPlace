Ext.define('WorkPlace.viewModel.OutgoingTasks', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.outgoingTasks',

    stores: {
        outgoingTasks: {
            type: 'outgoingTasks'
        }
    }

});