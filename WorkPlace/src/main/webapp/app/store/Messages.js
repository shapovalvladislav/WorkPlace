Ext.define('WorkPlace.store.Messages', {
    extend: 'Ext.data.Store',

    alias: 'store.messages',

    requires: [
        'WorkPlace.overrides.JsonProxy'
    ],

    model: 'WorkPlace.model.Message',

    proxy: {
         type: 'jsonProxy',
         url: '/WorkPlace/rest/messages',
         reader: {
             type: 'json',
             rootProperty: 'info',
             successProperty: 'success'
         },
         writer: {
            type: 'json'
         }
     }
});