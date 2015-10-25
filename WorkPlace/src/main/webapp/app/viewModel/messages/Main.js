Ext.define('WorkPlace.viewModel.messages.Main', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.messagesMain',

    stores: {
        people: {
           source: 'WorkPlace.store.Employees',
            filters: [
                {
                    property: 'id',
                    value: Ext.util.Cookies.get('userId'),
                    operator: '!='
                }
            ]
        }
    }
});