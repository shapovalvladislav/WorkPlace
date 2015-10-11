Ext.define('WorkPlace.store.Employees', {
    extend: 'Ext.data.Store',

    alias: 'store.employees',
    model: 'WorkPlace.model.Employee',
    autoLoad: true,
    data : { 'items' :[
        {'name': 'Ed', 'surname': 'Spencer', 'department': 'Development', 'position': 'Developer', 'email': 'test1@mail.ru'},
        {'name': 'Bed', 'surname': 'Spencer', 'department': 'QA', 'position': 'QA Engineer', 'email': 'test2@mail.ru'},
        {'name': 'Bad', 'surname': 'Spencer', 'department': 'Technical Support', 'position': 'Support Engineer', 'email': 'test3@mail.ru'},
        {'name': 'DedD', 'surname': 'Spencer', 'department': 'Development', 'position': 'Software Architect', 'email': 'test4@mail.ru'},
    ]},

    proxy: {
         type: 'ajax',
         url: '/WorkPlace/rest/employees/get',
         actionMethods: { read: 'POST' },
         pageParam: null,
         startParam: null,
         limitParam: null,
         root: 'info',
         successProperty: 'success',
         headers: {
            'Content-Type' : 'application/json'
         },
         reader: {
             type: 'json'
         }
     }
});