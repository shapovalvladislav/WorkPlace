Ext.define('WorkPlace.viewModel.messages.Dialog', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.dialog',

    stores: {
        messages: {
           type: 'messages'
      	}
    }
});