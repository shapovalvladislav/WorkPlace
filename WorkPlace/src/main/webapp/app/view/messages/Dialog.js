Ext.define('WorkPlace.view.messages.Dialog', {
    extend: 'Ext.container.Container',

    requires: [
        'WorkPlace.viewModel.messages.Dialog',
        'WorkPlace.viewController.messages.Dialog',
        'WorkPlace.store.Messages'
    ],

    xtype: 'dialog',
    viewModel: 'dialog',
    controller: 'dialog',
    autoScroll: true
});